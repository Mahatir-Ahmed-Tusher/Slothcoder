import { createRequestHandler } from '@remix-run/node';
import * as build from './build/server/index.js';

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext() {
    return {
      env: process.env
    };
  },
});

export default handler;
