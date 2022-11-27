import axios from 'axios';

// TOKENS ******************************************************************************************

//this assumes the default expiration time for the token is an hour (3600 miliseconds)
const EXPIRATION_TIME: number = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds

const setTokenTimestamp = (): void =>
	window.localStorage.setItem('spotify_token_timestamp', Date.now().toString());

const setLocalAccessToken = (token: string): void => {
	setTokenTimestamp();
	window.localStorage.setItem('spotify_access_token', token);
};

const setLocalRefreshToken = (token: string): void =>
	window.localStorage.setItem('spotify_refresh_token', token);

//get tokens
const getTokenTimestamp = (): string =>
	window.localStorage.getItem('spotify_token_timestamp') as string;
const getLocalAccessToken = (): string | null =>
	window.localStorage.getItem('spotify_access_token');
const getLocalRefreshToken = (): string | null =>
	window.localStorage.getItem('spotify_refresh_token');

// Refresh the token
const refreshAccessToken = async (): Promise<void> => {
	try {
		const { data } = await axios.get(
			`http://localhost:8080/refresh_token?refresh_token=${getLocalRefreshToken()}`
		);
		const { access_token } = data;

		setLocalAccessToken(access_token);

		window.location.reload();

		console.log('token refreshed');

		return;
	} catch (e) {
		console.error(e);
	}
};

// Get access token off of query params (called on application init)
const getAccessToken = (): string | null => {
	const queryString: string = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const access_token = urlParams.get('access_token') as string;
	const refresh_token = urlParams.get('refresh_token') as string;
	const error = urlParams.get('error') as string;

	if (error) {
		console.error(error);
		refreshAccessToken();
	}

	// If token has expired
	if (Date.now() - parseInt(getTokenTimestamp()) > EXPIRATION_TIME) {
		console.warn('Access token has expired, refreshing...');
		refreshAccessToken();
	}

	const localAccessToken: string | null = getLocalAccessToken();

	// If there is no ACCESS token in local storage, set it and return `access_token` from params
	if ((!localAccessToken || localAccessToken === 'undefined') && access_token) {
		setLocalAccessToken(access_token);
		setLocalRefreshToken(refresh_token);
		return access_token;
	}

	return localAccessToken;
};

export const accessToken = getAccessToken();

export const logout = (): void => {
	// Clear all localStorage items
	window.localStorage.removeItem('spotify_token_timestamp');
	window.localStorage.removeItem('spotify_access_token');
	window.localStorage.removeItem('spotify_refresh_token');
	window.location.reload();
};

// API CALLS ***************************************************************************************

/**
 * Axios global request headers
 * https://github.com/axios/axios#global-axios-defaults
 */
// axios.defaults.baseURL = 'https://api.spotify.com/v1';

const headers = {
	Authorization: `Bearer ${accessToken}`,
	'Content-Type': 'application/json',
};

/**
 * Get Current User's Profile
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-current-users-profile
 * @returns {Promise}
 */
export const getCurrentUserProfile = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me', { headers });

/**
 * Get User's Followed Artists
 * https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/
 */
export const getFollowing = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });

/**
 * Get a List of Current User's Playlists
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-list-of-current-users-playlists
 * @returns {Promise}
 */
export const getPlaylists = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me/playlists', { headers });

/**
 * Get a User's Top Artists
 * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
 */
export const getTopArtistsShort = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term', {
		headers,
	});
export const getTopArtistsMedium = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term', {
		headers,
	});
export const getTopArtistsLong = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', { headers });

/**
 * Get a User's Top Tracks
 * https://developer.spotify.com/documentation/web-api/reference/personalization/get-users-top-artists-and-tracks/
 */
export const getTopTracksShort = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', { headers });
export const getTopTracksMedium = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term', {
		headers,
	});
export const getTopTracksLong = (): Promise<any> =>
	axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', { headers });

/**
 * Get an Artist
 * https://developer.spotify.com/documentation/web-api/reference/artists/get-artist/
 */
export const getArtist = (artistId: string): Promise<any> =>
	axios.get(`https://api.spotify.com/v1/artists/${artistId}`, { headers });

/**
 * Get a Playlist's Tracks
 * https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlists-tracks/
 */
export const getPlaylistTracks = (playlistId: string): Promise<any> =>
	axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers });

/**
 * Return a comma separated string of track IDs from the given array of tracks
 */
const getTrackIds = (tracks: any[]): string => tracks.map(({ track }) => track.id).join(',');

/**
 * Get Audio Features for Several Tracks
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-several-audio-features/
 */
export const getAudioFeaturesForTracks = (tracks: any[]): Promise<any> => {
	const ids: string = getTrackIds(tracks);
	return axios.get(`https://api.spotify.com/v1/audio-features?ids=${ids}`, { headers });
};

/**
 * Get a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-track/
 */
export const getTrack = (trackId: string): Promise<any> =>
	axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, { headers });

/**
 * Get Audio Analysis for a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/
 */
export const getTrackAudioAnalysis = (trackId: string): Promise<any> =>
	axios.get(`https://api.spotify.com/v1/audio-analysis/${trackId}`, { headers });

/**
 * Get Audio Features for a Track
 * https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/
 */
export const getTrackAudioFeatures = (trackId: string): Promise<any> =>
	axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, { headers });
