import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig, transformWithEsbuild } from 'vite';

const entry = resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/DateTime.js');

export default defineConfig(({ mode }) => {
	const isUmd = mode === 'umd';
	const isEs = mode === 'es';
	const jsxInJs = {
		name: 'jsx-in-js',
		async transform(code, id) {
			if (!/\/src\/.*\.js$/.test(id)) return null;
			return transformWithEsbuild(code, id, {
				loader: 'jsx',
				jsx: isUmd ? 'transform' : 'automatic',
			});
		},
	};

	return {
		plugins: [ jsxInJs, react({ jsxRuntime: isUmd ? 'classic' : 'automatic' }) ],
		publicDir: false,
		build: {
			emptyOutDir: isEs,
			lib: {
				entry,
				formats: [ mode ],
				name: 'Datetime',
			},
			rollupOptions: {
				external: id => id === 'moment' || id === 'moment-timezone' || id === 'react' || (!isUmd && id.startsWith('react/')),
				output: isUmd ? {
					entryFileNames: 'react-datetime.umd.js',
					exports: 'default',
					globals: {
						moment: 'moment',
						'moment-timezone': 'moment',
						react: 'React',
					},
					name: 'Datetime',
				} : isEs ? {
					entryFileNames: 'react-datetime.esm.mjs',
				} : {
					entryFileNames: 'react-datetime.cjs.js',
					exports: 'named',
					interop: 'auto',
				},
			},
			sourcemap: true,
		},
	};
});
