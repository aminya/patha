module.exports = {
  preset: "ts-jest/presets/js-with-ts-esm",
  extensionsToTreatAsEsm: [".ts"],
  transformIgnorePatterns: [], // transform everything
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: [],
  // coverage
  collectCoverageFrom: ["src/**/*.{ts,mjs,cjs}"],
  coveragePathIgnorePatterns: ["assets"],
  verbose: true,
}
