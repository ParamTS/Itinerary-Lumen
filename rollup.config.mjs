// rollup.config.mjs
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import pxtorem from 'postcss-pxtorem';
import path from 'path'

let workingDir = "src/Frontend/Layout/_resources/assets";

export default {
	input: workingDir + '/main.ts',
	output: [
		{
			file: workingDir + '/main.b.js',
			format: 'cjs'
		},
		{
			file: workingDir + '/main.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		}
	],
	plugins: [
		typescript(),
		scss(
			{
				fileName: 'main.b.css',
				outputStyle: 'compressed'
			}
		)
	]
};