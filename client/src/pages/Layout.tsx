import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar } from '../components/navBar';

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

export function Layout() {
	return (
		<>
			<NavBar />
			<div className="main__wrapper">
				<main className="main__container">
					<ScrollToTop />
					<Outlet />
				</main>
			</div>
		</>
	);
}
