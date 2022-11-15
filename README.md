# ʕ •́؈•̀) `workers-typescript-example`

A batteries included template for kick starting a TypeScript Cloudflare worker project.

## 🔋 Getting Started

This template is meant to be used with [Wrangler](https://github.com/cloudflare/wrangler). If you are not already familiar with the tool, we recommend that you install the tool and configure it to work with your [Cloudflare account](https://dash.cloudflare.com). Documentation can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler/).

To generate using Wrangler, run this command:

```bash
wrangler generate my-ts-project https://github.com/EverlastingBugstopper/worker-typescript-template
```

### 👩 💻 Developing

[`src/index.js`](./src/index.ts) calls the request handler in [`src/handler.ts`](./src/handler.ts), and will return the [request method](https://developer.mozilla.org/en-US/docs/Web/API/Request/method) for the given request.

### 🧪 Testing

This template comes with mocha tests which simply test that the request handler can handle each request method. `npm test` will run your tests.

### ✏️ Formatting

This template uses [`prettier`](https://prettier.io/) to format the project. To invoke, run `npm run format`.

### 👀 Previewing and Publishing

For information on how to preview and publish your worker, please see the [Wrangler docs](https://developers.cloudflare.com/workers/tooling/wrangler/commands/#publish).

## 📁 KV Database

To get KV Database created, please execute the following

```shell
wrangler kv:namespace create <YOUR_NAMESPACE>
🌀  Creating namespace with title <YOUR_WORKER-YOUR_NAMESPACE>
✨  Success!Add the following to your configuration file:
kv_namespaces = [
  { binding = <YOUR_BINDING>, id = "xxxxxxxxxxxxxxxxx" }
]
```

In our case namespace is named TEST.
Next, in your `wrangler.toml file`, add the following with the values generated in your terminal, just like in the example here.

Now you can use it in JS file by

```javascript
import { KVNamespace } from '@cloudflare/workers-types';
declare const <YOUR_BINDING>: KVNamespace;
```

which is in our case:

```javascript
import { KVNamespace } from '@cloudflare/workers-types';
declare const TEST: KVNamespace;

...

const post = await TEST.get('post_' + postId);
const posts = await TEST.list({ prefix: 'post_' });
```
