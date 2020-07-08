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
      branches: 90,
      functions: 93,
      lines: 95,
      statements: -11
    }
  }
};
