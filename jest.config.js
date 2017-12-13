module.exports = {
  setupFiles: ['<rootDir>/test/setup.js'],
  cacheDirectory: '<rootDir>/.jest/',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '\\.yml$': 'yaml-jest',
    '\\.(js|jsx)?$': 'babel-jest',
  },
  modulePaths: ['src'],
}
