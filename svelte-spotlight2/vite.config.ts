import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
// import autoImport from 'sveltekit-autoimport';
// autoImport({
// 	module: {
// 		svelte: ['onMount', 'createEventDispatcher']
// 	}
// })
const config: UserConfig = {
	plugins: [sveltekit()]
};

export default config;
