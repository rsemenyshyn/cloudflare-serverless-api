import { KVNamespace } from '@cloudflare/workers-types';

declare const TEST: KVNamespace;

const Post = async (request: any) => {
  const postId = request.params.id;
  const post = await TEST.get('post_' + postId);
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  };
  return new Response(post, { headers });
}

export default Post;
