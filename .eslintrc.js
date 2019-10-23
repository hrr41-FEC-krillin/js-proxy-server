module.exports = {
  'extends': [
    'airbnb-base'
  ],
  'rules': {
    'no-unused-vars': ["error", { "argsIgnorePattern": "^_" }],
    'no-console': ["error", { 'allow': ["warn", "error"] }]
  }
}
