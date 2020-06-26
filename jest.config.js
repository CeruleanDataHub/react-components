module.exports = {
  rootDir: "src/",
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.js"
  }
};
