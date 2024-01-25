[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Static Badge](https://img.shields.io/badge/coverage-100-brightgreen)
![Static Badge](https://img.shields.io/badge/release-1.0.1-blue)
[![test](https://github.com/airporting/middy-stripe/actions/workflows/test.yml/badge.svg)](https://github.com/airporting/middy-stripe/actions/workflows/test.yml)

# middy-stripe

Automatically injects Stripe client into lambda context.

```javascript
import middy from '@middy/core';
import httpJsonBodyParserMiddleware from '@airporting/middy-stripe';

middy(yourHandler).use(stripeMiddleware({ apiKey: 'YOUR_API_KEY' }));
```

## Usage

```javascript
export default async ({ body }, { stripe }) => {
  // direct usage of body as an object
};
```

## Why ?

At Airporting, we apply some common good practices (hope you too). Mainly, we DRY, we SOLID, we continuously updates ours deps. And we love dependency injection.

### Don't Repeat Yourself

Numerous of our endpoints need the use of stripe client. Instead of repeating this in all our handlers files:
```javascript
import Stripe from 'stripe';

const stripe = new Stripe(apiKey);

// ...code
```
We prefer to use a middleware dedicated. Our serverless entrypoints, which references all the handlers are generated, so it's easy to generate a call to a middleware usage instead of repeating ourselves again and again.

### SOLID

***S*** stands for *Single responsibility*. Our business code doesn't need to know how to get the Stripe client instance. It just need this instance ready to use.

### Continuous updates

As you can see in our files structure, we strongly use renovate to be always up-to-date. It's true for our public and private dependencies and, of course, for all our reporsitories. If we upgrade this middleware with some helpers (for example), if we fix something, we will just let Renovate upgrade everything for us. If we don't use this middleware, we would have to update each repo by our hands. Boring. 

### Testing, dependency injection

No matter the way you test your code, mocking a `require`/`import` module is often painful. With dependency injection, you can just pass your mock as a parameter. Quite more easy.
