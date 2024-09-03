/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: '@gem-site-template/typescript-config/tsconfig.json',
	},
	rules: {
		// TypeScript-specific rules
	},
};
