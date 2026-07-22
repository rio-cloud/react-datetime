import react from '@vitejs/plugin-react';
import { transformWithEsbuild } from 'vite';
import { defineConfig } from 'vitest/config';

const jsxInJs = {
	name: 'jsx-in-js',
	async transform(code, id) {
		if (!/\/(?:src|test)\/.*\.js$/.test(id)) return null;
		return transformWithEsbuild(code, id, { loader: 'jsx', jsx: 'automatic' });
	},
};

export default defineConfig({
	plugins: [ jsxInJs, react() ],
	esbuild: {
		loader: 'jsx',
		include: /(?:src|test)\/.*\.jsx?$/,
	},
	test: {
		environment: 'jsdom',
		include: [ 'test/**/*.spec.jsx' ],
		setupFiles: [ './test/setup.js' ],
		restoreMocks: true,
	},
	optimizeDeps: {
		esbuildOptions: {
			loader: { '.js': 'jsx' },
		},
	},
});
