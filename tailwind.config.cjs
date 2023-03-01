/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {},
	  colors: {
		'white': '#ffffff',
		'black': '#000000',
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