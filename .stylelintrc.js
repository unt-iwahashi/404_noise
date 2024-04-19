module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-recess-order'],
  ignoreFiles: ['**/node_modules/**'],
  rules: {
    'scss/comment-no-empty': null,
    'value-keyword-case': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'inside-block'],
        ignore: ['after-comment'],
        ignoreAtRules: ['else'],
      },
    ],
    'property-no-vendor-prefix': null,
    'comment-empty-line-before': null,
    'media-feature-range-notation': 'prefix',
    'declaration-empty-line-before': 'never',
    'selector-class-pattern': null,
    'scss/dollar-variable-pattern': null,
  },
};
