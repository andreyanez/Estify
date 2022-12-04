import { Link } from 'react-router-dom';
import { formatDuration } from '../utils';
import { HoverCover } from './HoverCover';

export const TracKItem = ({ track }: { track: any }) => {
	return (
		<li className="track__list_item">
			<Link to={`/track/${track.id}`}>
				<div className="track__list_item__container">
					<div className="track__list_item__img">
						<img src={track.album.images[2].url} alt={track.name} />
						<HoverCover />
					</div>
					<div className="track__data">
						<span className="track__title">{track.name}</span>
						<div className="track__credits">
							{track.artists.map((artist: any, index: number) => {
								return (
									<span key={artist.id}>
										{artist.name}
										{track.artists.length > 0 && index === track.artists.length - 1 ? '' : ','}
										&nbsp;
									</span>
								);
							})}
							{' ·  '}
							<span>{track.album.name}</span>
						</div>
					</div>
				</div>
				<span className="track__length">{formatDuration(track.duration_ms)}</span>
			</Link>
		</li>
	);
};
