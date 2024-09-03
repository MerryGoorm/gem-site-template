/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	overrides: [
		{
			files: ['*.js'],
			extends: ['./javascript.js'],
		},
		{
			files: ['*.jsx'],
			extends: ['./javascript-react.js'],
		},
		{
			files: ['*.ts'],
			extends: ['./typescript.js'],
		},
		{
			files: ['*.tsx'],
			extends: ['./typescript-react.js'],
		},
	],
};
