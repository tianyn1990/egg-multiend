'use strict';

const mock = require('egg-mock');

describe('test/multiend.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/multiend-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, multiend')
      .expect(200);
  });
});
