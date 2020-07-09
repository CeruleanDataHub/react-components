module.exports = {
  rootDir: "src/",
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.js"
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0
    }
  }
};
