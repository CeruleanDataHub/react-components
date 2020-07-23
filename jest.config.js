module.exports = {
  rootDir: "src/",
  setupFilesAfterEnv: ["<rootDir>/setupTest.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css)$": "<rootDir>/styleMock.js",
    "^dnd-core$": "dnd-core/dist/cjs",
    "^react-dnd-html5-backend$": "react-dnd-html5-backend/dist/cjs",
    "^react-dnd$": "react-dnd/dist/cjs",
    "^.+.svg$": "jest-transform-stub"
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
