import { Action } from '../components/landing/Action';
import { Faqs } from '../components/landing/Faqs';
import { Footer } from '../components/landing/Footer';
import { Hero } from '../components/landing/Hero';
import { Info } from '../components/landing/Info';

export const Login = () => {
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
