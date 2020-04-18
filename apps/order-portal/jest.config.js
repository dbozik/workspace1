module.exports = {
  name: 'order-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/order-portal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
