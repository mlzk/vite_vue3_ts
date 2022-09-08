module.exports = {
  types: [
    { value: 'feat', name: '✨特性:    新的特性' },
    { value: 'fix', name: '🐛修复:    Bug修复' },
    { value: 'docs', name: '📝文档:    文档变更' },
    { value: 'style', name: '💎格式:    不影响代码含义的更改（空白、格式、缺少分号等）' },
    { value: 'refactor', name: '♻重构:    代码重构，注意和特性、修复区分开' },
    { value: 'perf', name: '🚀性能:    性能提升' },
    { value: 'test', name: '🚨测试:    增加或改动了测试用例' },
    { value: 'build', name: '🛠构建:    构建系统或者依赖变更（构建、脚手架工具等）' },
    { value: 'ci', name: '⚙️ CI:    修改了 CI 配置、脚本' },
    { value: 'chore', name: '♻️基础:   其它一些不影响业务代码的变动' },
    { value: 'revert', name: '🗑 回滚:    代码回退' }
  ],
    // scope 类型，针对 React 项目
    scopes: [
      ['components', '组件相关'],
      ['hooks', 'hook 相关'],
      ['hoc', 'HOC'],
      ['utils', 'utils 相关'],
      ['antd', '对 antd 主题的调整'],
      ['element-ui', '对 element-ui 主题的调整'],
      ['styles', '样式相关'],
      ['deps', '项目依赖'],
      ['auth', '对 auth 修改'],
      ['other', '其他修改'],
      // 如果选择 custom ,后面会让你再输入一个自定义的 scope , 也可以不设置此项， 把后面的 allowCustomScopes 设置为 true
      ['custom', '以上都不是？我要自定义'],
    ].map(([value, description]) => {
      return {
        value,
        name: `${value.padEnd(30)} (${description})`
      };
    }),
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