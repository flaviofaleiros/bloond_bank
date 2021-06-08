module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/pages/'],
    bail: 1,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
    coverageReporters: ['lcov', 'text'],
};
