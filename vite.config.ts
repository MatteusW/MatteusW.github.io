import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit(), UnoCSS()]
};

export default config;
