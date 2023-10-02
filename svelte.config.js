import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		env:{
			dir:"./"
		},
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		// Add preprocess to handle TypeScript and other preprocessing
		
	},
	preprocess: [
		preprocess({
		  typescript: {
			tsconfigFile: './tsconfig.json', // Path to your tsconfig.json
		  },
		}),
	],
};

export default config;
