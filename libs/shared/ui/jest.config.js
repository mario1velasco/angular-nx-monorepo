module.exports = {
  displayName: 'shared-ui',
  preset: '../../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.(html|svg)$',
    },
  },
  coverageDirectory: '../../../coverage/libs/shared/ui',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': 'jest-preset-angular',
    '^.+\\.stories\\.[jt]sx?$': '@storybook/addon-storyshots/injectFileName',
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};

// module.exports = {
//   globals: {
//     __TRANSFORM_HTML__: true,
//   },
//   transform: {
//     '^.+\\.jsx?$': 'babel-jest',
//     '^.+\\.(ts|html)$':
//       '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', '.html'],
// };
