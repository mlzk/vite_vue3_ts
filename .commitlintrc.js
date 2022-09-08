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
		'type-enum': [
			2,
			'always',
			[
				'build',
				'chore',
				'ci',
				'docs',
				'feat',
				'fix',
				'perf',
				'refactor',
				'revert',
				'style',
				'test',
			],
		],
	},
	prompt: {
		questions: {
			type: {
				description: "选择你要提交的类型",
				enum: {
					feat: {
						description: '新的特性',
						title: 'Features',
						emoji: '✨',
					},
					fix: {
						description: 'Bug 修复',
						title: 'Bug Fixes',
						emoji: '🐛',
					},
					docs: {
						description: '文档变更',
						title: 'Documentation',
						emoji: '📚',
					},
					style: {
						description:
							'不影响代码含义的更改（空白、格式、缺少分号等）',
						title: 'Styles',
						emoji: '💎',
					},
					refactor: {
						description:
							'代码重构，注意和特性、修复区分开',
						title: 'Code Refactoring',
						emoji: '📦',
					},
					perf: {
						description: '性能提升',
						title: 'Performance Improvements',
						emoji: '🚀',
					},
					test: {
						description: '增加或改动了测试用例',
						title: 'Tests',
						emoji: '🚨',
					},
					build: {
						description:'构建系统或者依赖变更（构建、脚手架工具等）',
						title: 'Builds',
						emoji: '🛠',
					},
					ci: {
						description:
							'更改CI配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）',
						title: 'Continuous Integrations',
						emoji: '⚙️',
					},
					chore: {
						description: "其它一些不影响业务代码的变动",
						title: 'Chores',
						emoji: '♻️',
					},
					revert: {
						description: '代码回退',
						title: 'Reverts',
						emoji: '🗑',
					},
				},
			},
			scope: {
				description:
					'代码变更的范围（例如组件/文件名/业务模块）',
			},
			subject: {
				description:
					'填写简述',
			},
			body: {
				description: '提供更详细的变更说明',
			},
			isBreaking: {
				description: '是否存在破坏性（BREAKING CHANGE）代码更新?',
			},
			breakingBody: {
				description:
					'请为本次 BREAKING CHANGE 添加一个简要说明',
			},
			breaking: {
				description: '为本次破坏性（BREAKING CHANGE）填写更详细说明',
			},
			isIssueAffected: {
				description: '本次commit关联是否关联 issues?',
			},
			issuesBody: {
				description:
					'如果关联的issue已经关闭，可以针对本次commit 做一个信息补充',
			},
			issues: {
				description: '补充涉及的issues (e.g. "fix #123", "re #123".)',
			},
		},
	},
};