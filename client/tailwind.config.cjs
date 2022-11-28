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
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
