module.exports = {
  testEnvironment: "jsdom", 
  transform: {
    "^.+\\.jsx?$": "babel-jest", 
  },
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy", 
  },
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.js",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"], 
};
