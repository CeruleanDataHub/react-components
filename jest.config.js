module.exports = {
  rootDir: "src/",
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.js"
  },
  // Values are lower than they should be due to skipped tests
  coverageThreshold: {
    global: {
      branches: 90.4,
      functions: 97.5,
      lines: 97.8,
      statements: -5
    }
  }
};
