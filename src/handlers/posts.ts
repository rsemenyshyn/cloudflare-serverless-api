import { KVNamespace } from '@cloudflare/workers-types';

declare const TEST: KVNamespace;

const Posts = async () => {
  const posts = await TEST.list({ prefix: 'post_' });
  const body = JSON.stringify(posts);
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  };
  return new Response(body, { headers });
}

export default Posts;
