module.exports = {
  extends: '../frontend-config/eslint/typescript',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/resolver': {
          alias: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            map: [['@centreon/ui-context', '..//ui-context']],
          },
        },
      },
    },
  ],
};
