module.exports = {
  parser: '@typescript-eslint/parser', // Use TypeScript parser for ESLint
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'], // Add your tsconfig paths here
    tsconfigRootDir: __dirname,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React-specific linting rules
    'plugin:react/jsx-runtime', // Support for JSX without React import (React 17+)
    'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
    'plugin:@typescript-eslint/recommended-type-checked', // Stricter TypeScript rules
  ],
  rules: {
    // Add any custom rules here, or override defaults
    // For example:
    '@typescript-eslint/no-unused-vars': 'error',
    'react/prop-types': 'off', // Turn off prop-types if you're using TypeScript for types
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the version of React
    },
  },
};
