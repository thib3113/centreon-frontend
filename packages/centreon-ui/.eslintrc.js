module.exports = {
  extends: './node_modules/@centreon/frontend-config/eslint/typescript',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      settings: {
        'import/resolver': {
          alias: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            map: [
              ['@centreon/ui-context', './node_modules/@centreon/ui-context'],
            ],
          },
        },
      },
    },
  ],
};
