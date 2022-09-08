// const scopes = require('commitlint-config-cz/lib/scopes')();
const types = require('commitlint-config-cz/lib/types')();
module.exports = {
	rules: {
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'subject-case': [
			2,
			'never',
			['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
		],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		// 'scope-enum': [
		// 	2,
		// 	'always',
		// 	scopes],
		'type-enum': [
			2,
			'always',
			types
		],
	},

};