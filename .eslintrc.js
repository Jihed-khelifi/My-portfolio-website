module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'off',
    'no-trailing-spaces': 'off',
    // components should be defined in the same file as the component
    'vue/component-definition-name-casing': 'off',
    // components should be multi-worded 
    'vue/component-name-in-template-casing': 'off',
    'multi-word-component-name': 'off',

  }
}
