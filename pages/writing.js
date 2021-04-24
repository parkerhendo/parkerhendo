import Header from '../components/Header';
import Layout from '../components/Layout';
import Block from '../components/Block';
import BlockItem from '../components/BlockItem';
import { getStaticPaths } from './posts/[slug]';
import { getAllPosts } from '../lib/api';

export default function Writing({ posts }) {
  return (
    <div className='container'>
      <Header />
      <Layout>
        <Block title='Writing'>
          {posts.map((post) => (
            <BlockItem
              title={post.title}
              description={post.excerpt}
              link={{
                href: `/posts/${post.slug}`,
                label: 'Read More',
              }}
            />
          ))}
        </Block>
      </Layout>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const posts = getAllPosts(['title', 'slug', 'author', 'excerpt']);

  return {
    props: {
      posts,
    },
  };
}
