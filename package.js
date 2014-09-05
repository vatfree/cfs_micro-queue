Package.describe({
  name: 'cfs:micro-queue',
  version: '0.0.0',
  summary: "Micro-queue provides a small, fast queue/list built for Power-Queue"
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use('deps', ['client', 'server']);

  api.export && api.export('MicroQueue');
  api.add_files(['micro-queue.js'], ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('cfs:micro-queue');
  api.use('test-helpers', 'server');
  api.use('tinytest');

  api.add_files('tests.js');
});
