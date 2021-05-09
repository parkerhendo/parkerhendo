import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

import Header from '../components/Header';
import Block from '../components/Block';
import BlockItem from '../components/BlockItem';

export default function Now() {
  return (
    <div className='container'>
      <Head>
        <title>Parker Henderson</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Layout>
        <Block title='Now'>
          <p className='body-lg paragraph'>
          This is a non-exhaustive list of what I'm currently up to outside of work. It includes books, side-projects, topics and questions I'm exploring, and other ways of spending my time.
          </p>
        </Block>
        <Block>
          <BlockItem
            title='Programming Languages'
            description='Programming languages are a fascinating medium to study if you are interested in human-computer interaction. What defines a good programming language? What do next-generation programming languages and environments look like? What is the right level of abstraction for digital creation?'
          />
          <BlockItem
            title='Fun &amp; Playful Software'
            description="Most of the time, when we think of fun software, we think of video games. What would it take to bring the characteristics of a video game into enterprise software? What are the elements and principles that make a software product inherently fun? And how can we apply those principles to otherwise dull software applications?"
          />
          <BlockItem
            title='Computational Creativity'
            description="We're still just scratching the surface of what computers can do to aid the creative process. There's so much to think about when it comes to how we create, consume, and remix digital work."
          />
        </Block>
      </Layout>
    </div>
  );
}
