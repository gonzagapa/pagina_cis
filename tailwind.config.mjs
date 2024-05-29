/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		fontFamily: {
			'title': ['"Alfa Slab One"', "system-ui"],
			'body': ['"Open Sans"']
		},
		extend: {
			colors: {
				blue: {
					500: '#0A2351'
				},
				yellow: {
					500: '#9F7D1E'
				}
			},
			backgroundImage: {
				'hero-image': "url(/public/HeroCisMiembros.jpeg)"
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
