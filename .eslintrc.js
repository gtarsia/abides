
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:ava/recommended',
  ],
  "plugins": [
    "jsdoc",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: [2, 'never'],
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'off',
    "jsdoc/check-alignment": 1,
    "jsdoc/check-examples": 0,
    "jsdoc/check-indentation": 1,
    "jsdoc/check-param-names": 1,
    "jsdoc/check-syntax": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 0,
    "jsdoc/newline-after-description": 1,
    "jsdoc/no-undefined-types": 0,
    "jsdoc/require-description": 1,
    "jsdoc/require-description-complete-sentence": 1,
    "jsdoc/require-example": 1,
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-param": 1,
    "jsdoc/require-param-description": 1,
    "jsdoc/require-param-name": 1,
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns": 1,
    "jsdoc/require-returns-check": 1,
    "jsdoc/require-returns-description": 1,
    "jsdoc/require-returns-type": 1,
    "jsdoc/valid-types": 1
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './']
        ],
      }
    }
  }
}
