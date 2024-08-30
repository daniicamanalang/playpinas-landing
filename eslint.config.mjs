import js from '@eslint/js';
import react from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    ignores: [
      '.history/**',  // Ignore everything in the .history directory
      '.history/src/*',  // Ignore everything in the .history directory
      '.history/*',  // Ignore everything in the .history directory
      'node_modules/**',  // It's a good practice to explicitly ignore node_modules as well
      'build/**',  // If you have a build directory, ignore it too
    ],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars': ['error', { 
        varsIgnorePattern: 'React|Hero|Mall|Games|AboutUs|ContactUs',
        argsIgnorePattern: '^_'
      }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];