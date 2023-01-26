import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Action } from '../components/landing/Action';
import { Faqs } from '../components/landing/Faqs';
import { Footer } from '../components/landing/Footer';
import { Hero } from '../components/landing/Hero';
import { Info } from '../components/landing/Info';
import { accessToken } from '../spotify';

export const Login = () => {
	const [token, setToken] = useState('');

	useEffect(() => {
		setToken(accessToken!);
	}, []);

	if (accessToken) return <Navigate to="/app" replace />;

	return (
		<>
			<main>
				<Hero />
				<Info />
				<Action />
				<Faqs />
			</main>
			<Footer />
		</>
	);
};
