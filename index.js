import Stripe from 'stripe';

const stripeMiddleware = ({ apiKey }) => {
  async function before(request) {
    const { context } = request;

    context.stripe = new Stripe(apiKey);
  }

  return {
    before,
  };
};

export default stripeMiddleware;
