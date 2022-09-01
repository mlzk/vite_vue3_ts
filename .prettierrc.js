module.exports = {
  tabWidth: 2,
  // tab缩进大小,默认为2
  jsxSingleQuote: true,
  // jsx 单引号
  jsxBracketSameLine: true,
  //JSX尾标>签闭合位置 为true标识在同一行，false换行
  printWidth: 100,
  //每行最多多少个字符换行
  singleQuote: true,
  //使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  semi: false,
  // 使用分号
  endOfLine: 'auto',
  //换行符
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
  arrowParens: 'always',
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
}
