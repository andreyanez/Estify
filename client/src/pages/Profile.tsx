import { getCurrentUserProfile, logout } from '../spotify';
import { useState, useEffect } from 'react';

export const Profile = () => {
	const [profile, setProfile] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const userProfile = await getCurrentUserProfile();
				setProfile(userProfile.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			{profile && (
				<>
					<div>
						{profile.images.length && profile.images[0].url && (
							<img className="header__img" src={profile.images[0].url} alt="Avatar" />
						)}
					</div>
					<h1>{profile.display_name}</h1>
					<button onClick={logout}>Logout</button>
				</>
			)}
		</>
	);
};
