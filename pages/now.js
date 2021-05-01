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
            This is a non-exhaustive list about what I'm currently up to outside of work. It includes books,
            side-projects, topics and questions I'm exploring, and other things like that.
          </p>
          <div className='now-links'>
            <a
              href='https://www.goodreads.com/user/show/55640023-parker-henderson'
              target='_blank'
              className='body-lg link inline'
            >
              Books I'm reading
            </a>
            <a
              href='https://getpocket.com/@f4aT1A17gYz50pi7f7dc8fvd26p1g73039fcd9X296Rb96feDDb89ac7e33mA789'
              target='_blank'
              className='body-lg link inline'
            >
              Other things I'm reading
            </a>
          </div>
        </Block>
        <Block>
          <BlockItem
            title='Programming Languages'
            description='Programming languages are a fascinating medium to study if you are deeply interested in human-computer interaction. What defines a good programming language? What do next-generation programming languages and environments look like? What is the next step in software creation?'
          />
          <BlockItem
            title='Fun &amp; Playful Software'
            description="Most of the time, when we think of fun software we think of the likes of Snapchat, Zenly, various video games and a specific aesthetic that lends it's self to this feeling. What are the characteristics and principles that make a software product inherently fun? And how can we apply those principles to typically boring software used for jobs like recruiting?"
          />
          <BlockItem
            title='Computational Creativity'
            description="We're still just scratching the surface of what computers can do to aid the creative process. There's so much to think about when it comes to how we create, consume, and remix digital work."
          />
          <BlockItem
            title='Learning from the Greats'
            description="I'm currently reading through a variety of biographies about important people in history. Most recently I read the biography of Leonardo Di Vinci and I'm currently making my way through Steve Jobs's."
          />
        </Block>
      </Layout>
    </div>
  );
}
