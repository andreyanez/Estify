/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#181818',
				secondary: '#1EB954',
				secondarytwo: '#3BC214',
				neutral: '#9b9b9b',
				neutraltwo: '#212529',
			},
			animation: {
				'fade-in': 'fade-in 0.5s linear forwards',
				marquee: 'marquee var(--marquee-duration) linear infinite',
				'spin-slow': 'spin 4s linear infinite',
				'spin-slower': 'spin 6s linear infinite',
				'spin-reverse': 'spin-reverse 1s linear infinite',
				'spin-reverse-slow': 'spin-reverse 4s linear infinite',
				'spin-reverse-slower': 'spin-reverse 6s linear infinite',
			},
			keyframes: {
				'fade-in': {
					from: {
						opacity: 0,
					},
					to: {
						opacity: 1,
					},
				},
				marquee: {
					'100%': {
						transform: 'translateY(-50%)',
					},
				},
				'spin-reverse': {
					to: {
						transform: 'rotate(-360deg)',
					},
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
