import axios from 'axios';

// TOKENS ******************************************************************************************

//this assumes the default expiration time for the token is an hour (3600 miliseconds)
const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds

const setTokenTimestamp = () => window.localStorage.setItem('spotify_token_timestamp', Date.now());

const setLocalAccessToken = token => {
	setTokenTimestamp();
	window.localStorage.setItem('spotify_access_token', token);
};

const setLocalRefreshToken = token => window.localStorage.setItem('spotify_refresh_token', token);

//get tokens
const getTokenTimestamp = () => window.localStorage.getItem('spotify_token_timestamp');
const getLocalAccessToken = () => window.localStorage.getItem('spotify_access_token');
const getLocalRefreshToken = () => window.localStorage.getItem('spotify_refresh_token');

// Refresh the token
const refreshAccessToken = async () => {
	try {
		const { data } = await axios.get(`/refresh_token?refresh_token=${getLocalRefreshToken()}`);
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
const getAccessToken = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);

	const access_token = urlParams.get('access_token');
	const refresh_token = urlParams.get('refresh_token');
	const error = urlParams.get('error');

	if (error) {
		console.error(error);
		refreshAccessToken();
	}

	// If token has expired
	if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
		console.warn('Access token has expired, refreshing...');
		refreshAccessToken();
	}

	const localAccessToken = getLocalAccessToken();

	// If there is no ACCESS token in local storage, set it and return `access_token` from params
	if ((!localAccessToken || localAccessToken === 'undefined') && access_token) {
		setLocalAccessToken(access_token);
		setLocalRefreshToken(refresh_token);
		return access_token;
	}

	return localAccessToken;
};

export const accessToken = getAccessToken();

export const logout = () => {
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
export const getCurrentUserProfile = () => axios.get('https://api.spotify.com/v1/me', { headers });

/**
 * Get User's Followed Artists
 * https://developer.spotify.com/documentation/web-api/reference/follow/get-followed/
 */
export const getFollowing = () =>
	axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });

/**
 * Get a List of Current User's Playlists
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-a-list-of-current-users-playlists
 * @returns {Promise}
 */
export const getPlaylists = () =>
	axios.get('https://api.spotify.com/v1/me/playlists?limit=10', { headers });
