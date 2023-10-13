module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    complexity: ['error', 10],
    quotes: ['off'],
    'no-unused-vars': 'off',
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/no-unstable-nested-components': 'off',
  },
};
