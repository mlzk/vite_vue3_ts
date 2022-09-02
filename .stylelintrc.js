module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue',
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order'
  ],
  plugins: ['stylelint-scss','stylelint-order'],
  overrides: [
    // 扫描.vue/html文件中的<style>标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    }
  ],
  customSyntax: 'postcss-html',
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
  rules: {
    indentation: 2,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', ':deep']
      }
    ],
    'number-leading-zero': 'always',
    'no-descending-specificity': null,
    'function-url-quotes': 'always',
    'string-quotes': 'single',
    'unit-case': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'rule-empty-line-before': 'never',
    'font-family-no-missing-generic-family-keyword': null,
    'selector-type-no-unknown': null,
    'block-opening-brace-space-before': 'always',
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'property-no-unknown': null,
    'no-empty-source': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['global'] }
    ],
    'function-no-unknown': null,

  }
};
