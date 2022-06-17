import '../styles/pages/Artists.scss';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTopArtistsLong, getTopArtistsMedium, getTopArtistsShort } from '../spotify';
import { useState } from 'react';

export const Artists = () => {
	const [activeRange, setActiveRange] = useState<string>('long');
	const artistQuery: any = useQuery(['artists'], getTopArtistsLong);

	if (artistQuery.isLoading) {
		return <span className="mt-60 block">Loading...</span>;
	}

	const topArtists = artistQuery.data.data;

	const apiCalls = {
		long: getTopArtistsLong(),
		medium: getTopArtistsMedium(),
		short: getTopArtistsShort(),
	};

	//   useEffect(() => {
	// 	const fetchData = async () => {
	// 	  const { data } = await getTopArtistsLong();
	// 	  setTopArtists(data);
	// 	};
	// 	catchErrors(fetchData());
	//   }, []);

	const changeRange = async (range: string) => {
		// const { data } = await apiCalls[range];
		// setTopTracks(data);
		setActiveRange(range);
	};
	const setRangeData = (range: string) => changeRange(range);

	return (
		<div className="py-20">
			<div className="flex justify-between mb-16 items-center">
				<h1 className="filter__title">Top Artistas</h1>
				<ul className="filter__list">
					<li>
						<button onClick={() => setRangeData('long')}>Todos los tiempos</button>
						{/* <RangeButton activeRange={activeRange} setActiveRange={setActiveRange} /> */}
					</li>
					{/* <li>
						<button isActive={activeRange === 'long'}>Últimos 6 meses</button>
					</li>
					<li>
						<button isActive={activeRange === 'long'}>Últimas 4 semanas</button>
					</li> */}
				</ul>
			</div>
			<ul className="artists__grid">
				{topArtists.items.map((artist: any, index: number) => {
					return (
						<li className="artist__item" key={index}>
							<Link to={`/artist/${artist.id}`}>
								<div className="artist_item__img">
									<img src={artist.images[2].url} alt={artist.name} />
								</div>
								<span>{artist.name}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

// const RangeButton = ({ activeRange:string, setActiveRange }) => {
// 	return (
// 		<button
// 			className={activeRange === 'short' ? 'active' : ''}
// 			onClick={() => setActiveRange('short')}
// 		>
// 			This Month
// 		</button>
// 	);
// };
