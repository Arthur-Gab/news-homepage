import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			transparent: 'transparent',
			black: '#000',
			white: '#fff',
			primary: {
				orange: '#E9AB53',
				red: '#F15E50'
			},
			neutral: {
				grayish: '#FFFDFA',
				'dark-grayish': '#5D5F79',
				'very-dark-grayish': '#00001A'
			}
		}
		
	},
	plugins: [],
};
export default config;
