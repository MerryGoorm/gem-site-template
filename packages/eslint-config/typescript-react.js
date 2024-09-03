/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: '@gem-site-template/typescript-config/tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// TypeScript-React-specific rules
	},
};
