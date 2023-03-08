/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: 'class',
	theme: {
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

			// Primary background color

			'bg-dark-primary': '#1f2125',
			'bg-white-primary': '#eaeaec',

			// Secondary background color
			'bg-dark-secondary': '#161819',
			'bg-white-secondary': '#f5f7f9',
			'bg-green-secondary': '#1c8573',

			// Text color

			'white': '#ffffff',
			'black': '#000000',
			'gray-dark': '#bababa',
			'gray-white': '#868893',
			
			'bg-dark-hover': '#313234',
			'bg-white-hover': '#d9d9d9'
			
		}
	},
	plugins: [],
}