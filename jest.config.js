module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: [
    'js',
    'vue',
    'json'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    },
    // remove when we come back to rules logic
    "./components/Rules.vue": {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    },
    "./pages/rules.vue": {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    },
  },
  setupFiles: [
    '<rootDir>/jest.setup.js'
  ]
}
