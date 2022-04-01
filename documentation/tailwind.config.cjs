module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['dark', 'light']
	}
};
