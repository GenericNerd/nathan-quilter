/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundSize: {
				'size-200': '200% 200%'
			},
			backgroundPosition: {
				'pos-0': '0% 0%',
				'pos-100': '100% 100%'
			},
			height: {
				remaining: 'calc(100vh - 62.75px)'
			},
			minHeight: {
				remaining: 'calc(100vh - 62.75px)'
			}
		}
	},
	plugins: []
};
