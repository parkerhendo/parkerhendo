import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostbySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

import Head from 'next/head';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Block from '../../components/Block';
import BlockItem from '../../components/BlockItem';
import PostBody from '../../components/PostBody';
import PostHeader from '../../components/PostHeader';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    <ErrorPage statusCode={404} />;
  }

  return (
    <div className='container'>
      <Header />
      <Layout>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Hello World</title>
              </Head>
              <>
                <PostHeader title={post.title} author={post.author} date={post.date} />
                <PostBody content={post.content} />
              </>
            </article>
          </>
        )}
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostbySlug(params.slug, ['title', 'date', 'slug', 'author', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((p) => {
      return {
        params: {
          slug: p.slug,
        },
      };
    }),
    fallback: false,
  };
}
