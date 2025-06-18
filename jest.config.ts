import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest/presets/default-esm', // Usa ESM
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', // Corrige imports con extensión .js en ESM
  },
};

export default config;
