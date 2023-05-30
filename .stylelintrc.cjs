const atRuleNoUnknown = [
  true,
  {
    ignoreAtRules: ["import", "mixin", "include", "if", "use", "for", "function", "return", "else", "inset", "each"],
  },
];

module.exports ={
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-config-prettier-scss"
  ],
  "ignoreFiles": ["**/_normalize.scss", "dist/**"],
  "plugins": [
    "stylelint-scss",
    "stylelint-declaration-block-no-ignored-properties"
  ],
  "overrides": [
    {
      "files": ["*.scss"],
      "customSyntax": "postcss-scss"
    },
    {
      "files": ["*.sass"],
      "customSyntax": "postcss-sass"
    },
    {
      "files": ["*.{html,vue}"],
      "customSyntax": "postcss-html"
    }
  ],
  "rules": {
    "plugin/declaration-block-no-ignored-properties": true,
    "scss/at-import-no-partial-leading-underscore": true, // 允許使用下底線當前綴
    "scss/at-import-partial-extension": "never", // 允許不包含副檔名
    "import-notation": "string", //不需要添加 URL 格式的引用
    "no-invalid-double-slash-comments": null, //允許使用雙斜線作註解
    "at-rule-no-unknown": atRuleNoUnknown,
    "rule-empty-line-before": null, // at-rule允許不需要空行
    "declaration-empty-line-before": null, //不再強制要求屬性聲明前要空行
    "no-empty-source": null, //允許空白檔案
    "selector-class-pattern": null, //可使用駝峰式命名
    "scss/dollar-variable-pattern": null, //可使用駝峰式命名
    "scss/comment-no-empty": null,
    "scss/at-mixin-pattern": null,
    "max-nesting-depth": null,
    "no-descending-specificity": null,
    "keyframes-name-pattern": null,
  }
}
