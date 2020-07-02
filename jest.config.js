module.exports = {
  rootDir: "src/",
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.js"
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 96,
      lines: 97,
      statements: -5
    }
  }
};
