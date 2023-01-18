import React from 'react';
import { getCurrentUserProfile } from '../spotify';
import { useQuery } from '@tanstack/react-query';

export function ProfileStrip({}) {
	const { data, isLoading } = useQuery(['profile'], getCurrentUserProfile);

	if (isLoading) {
		return (
			<div className="profile__top">
				<h3>Cargando...</h3>
			</div>
		);
	}

	return (
		<div className="profile__top">
			<div className="profile__img">
				{data.data.images.length && data.data.images[0].url && (
					<img src={data.data.images[0].url} alt="Avatar" />
				)}
			</div>
			<div>
				<h3>{data.data.display_name}</h3>
			</div>
		</div>
	);
}
