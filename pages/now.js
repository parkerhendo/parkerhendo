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
            This is a non-exhaustive list about what I'm currently up to outside of work. It includes books, side-projects, topics and questions I'm exploring, and other things like that.
          </p>
        </Block>
        <Block>
          <BlockItem
            title='Programming languages'
            description='Programming languages are a fascinating medium to study if you are deeply interested in human-computer interaction. What defines a good programming language? What do next-generation programming languages and environments look like? What is the next step in software creation?'
            category='Topic'
          />
          <BlockItem
            title='Fun software'
            description="Most of the time, when we think of fun software we think of apps like Snapchat, Zenly, and a specific aesthetic that lends it's self to this feeling. What are the characteristics and principles that make a software product inherently fun? And how can we apply those principles to typically boring software used for jobs like recruiting?"
            category='Topics'
          />
          <BlockItem
            title='Computational creativity'
            description="We're still just scratching the surface of what computers can do to aid the creative process. There's so much to think about when it comes to how we create, consume, and remix digital work."
            category='Topics'
          />
          <BlockItem
            title='Learning from the greats'
            description="I'm currently reading through a variety of biographies about important people in history. Most recently I read the biography of Leonardo Di Vinci and I'm currently making my way through Steve Jobs's."
            category='Reading'
          />
        </Block>
      </Layout>
    </div>
  );
}
