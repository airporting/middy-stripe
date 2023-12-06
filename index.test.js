import stripeMiddleware from './index.js';

describe('stripeMiddleware', () => {
  it('basic', async () => {
    const handler = {
      context: {},
    };

    const middleware = stripeMiddleware({ apiKey: 'test' });
    await middleware.before(handler);

    expect(handler.context.stripe).toBeDefined();
  });
});
