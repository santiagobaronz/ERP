/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
		fontFamily: {
			'poppins': ['system-ui']
		},
		screens: {
			sm: '550px',
			md: '750px',
			lg: '1024px',
			xl: '1220px',
		},
		container: {
			center: true,
		},
		colors: {
			'bg-white': '#eaeaec',
			'white': '#ffffff',
			'black': '#000000',
			'bg-black': '#242424',
			'switchColor': '#313234',
			'green': {
				'50': '#f1fcf8',
				'100': '#d1f6eb',
				'200': '#a3ecd8',
				'300': '#6ddbbf',
				'400': '#44c3a8',
				'500': '#26a68d',
				'600': '#1c8573',
				'700': '#1a6b5d',
				'800': '#1a554d',
				'900': '#1a4740',
			},
		}
	},
	plugins: [],
}