module.exports = {
	trailingComma: 'all',
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	importOrder: [
		'^react?$',
		'<THIRD_PARTY_MODULES>',
		'^@goorm-dev/.*(?!$)',
		'^@(?=.*)(?!$)',
		'^../(?=.*)(?!$)',
		'^./(?=.*)(?!$)|^./?$',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
};
