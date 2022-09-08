module.exports = {
  types: [
    { value: 'feat', name: '特性:    一个新的特性' },
    { value: 'fix', name: '修复:    修复一个Bug' },
    { value: 'docs', name: '文档:    变更的只有文档' },
    { value: 'format', name: '格式:    空格, 分号等格式修复' },
    { value: 'refactor', name: '重构:    代码重构，注意和特性、修复区分开' },
    { value: 'perf', name: '性能:    提升性能' },
    { value: 'test', name: '测试:    添加一个测试' },
    { value: 'chore', name: '工具:    开发工具变动(构建、脚手架工具等)' },
    { value: 'revert', name: '回滚:    代码回退' }
  ],
  typePrefix: '[',
  typeSuffix: ']',
  scopes: [{ name: '配置文件' }],
  messages: {
    type: '为确保提交遵循规范!\n选择你要提交的类型: ',
    scope: '选择一个 scope (可选): ',
    customScope: '请输入自定义的 scope: ',
    subject: '填写简短的变更描述: \n',
    body: '填写更加详细的变更描述（可选）。使用 "|" 换行: \n',
    breaking: '列举非兼容性重大的变更（可选）: \n',
    footer: '关联关闭的 issue(可选)，例如: #31, #34:\n',
    confirmCommit: '确认提交？'
  },
  allowBreakingChanges: ['特性', '修复'],
  allowCustomScopes: true,
  subjectLimit: 100,
  breaklineChar: '|'
};