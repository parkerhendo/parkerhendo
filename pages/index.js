import Head from 'next/head';
import Block from '../components/Block';
import Header from '../components/Header';
import BlockItem from '../components/BlockItem';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Parker Henderson</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <Layout>
        <Block title='About me'>
          <p className='body-lg paragraph'>
            Hi, I'm Parker, I'm a coffee-obsessed product designer,{' '}
            <a href='https://github.com/parkerhendo' target='_blank' className='link highlight'>
              tinkerer
            </a>
            ,{' '}
            <a
              href='https://www.goodreads.com/user/show/55640023-parker-henderson'
              target='_blank'
              className='link highlight'
            >
              avid reader
            </a>
            , and{' '}
            <a href='https://twitter.com/parkerhendo' target='_blank' className='link highlight'>
              tweeter
            </a>
            . I'm currently building design systems and{' '}
            <a href='https://jumpstart.me' className='link highlight' target='_blank'>
              recruiting software at Jumpstart.
            </a>
          </p>
          <p className='body-lg paragraph'>
            In the past, I worked at Red Bull and a few startups, most of which you've probably never heard
            about. I spend my free time thinking and reading about product & design strategy, tinkering with
            software, and learning new things.
          </p>
        </Block>

        <div className='skills-values'>
          <div className='skills-values-wrapper'>
            <div className='skills col col-1'>
              <Block title='Skills'>
                <BlockItem
                  title={'Systems design'}
                  description={
                    'Everything we build is a system itself or embedded in a larger one. The ability to understand how all the pieces fit together is critical when designing.'
                  }
                />
                <BlockItem
                  title={'Interaction & visual design'}
                  description={
                    'From prototyping new interactions to designing into type and color systems. I like to think about the details so others can think about the big picture.'
                  }
                />
                <BlockItem
                  title={'Software engineering'}
                  description={
                    'I believe code is a powerful design tool and use my experience as a designer and engineer to establish systems, tools and processes across our teams.'
                  }
                />
              </Block>
            </div>
            <div className='skills col col-2'>
              <Block title='Values'>
                <BlockItem
                  title={'Inclusive and diverse teams'}
                  description={
                    'When we intentionally seek diversity in our teams and ensure everyone has a voice in the decisions effecting our work, we produce better results.'
                  }
                />
                <BlockItem
                  title={'Accessibility'}
                  description={
                    'As designers, we\'re responsible for creating products and experiences that are accessible for to everyone, not just the set of "ideal" personas we create.'
                  }
                />
                <BlockItem
                  title={'Growth'}
                  description={
                    'Championing the growth of those around you to learn new things from both success and failure levels up both teams and individuals.'
                  }
                />
              </Block>
            </div>
          </div>
        </div>
        <Block title='Work experience'>
          <BlockItem
            title={'Jumpstart'}
            category={'Current'}
            description={
              'Jumpstart is a shared talent marketplace that uses diversity data to help recruiters make more informed hiring decisions and give candidates equal opportunity to jobs within their preferred industry. I focus on integrations for our recruiter product and our design system.'
            }
            href='https://jumpstart.me'
          />

          <BlockItem
            title={'Red Bull Media House'}
            category={'2019-2020'}
            description={
              'Red Bull TV brings an inside look into the World of Red Bull straight to your living room and mobile device. Working on a team of three product designers, I currently lead design efforts on Red Bull’s mobile and immersive products across iOS, Android, Oculus, and more.'
            }
            href='https://redbull.com/tv'
          />

          <BlockItem
            title={'Talk to You Live'}
            category={'2018-2019'}
            description={
              'TTYL is a voice-first communication app that looked to bring spontaneous and lightweight conversations to your life through technology. I lead design and product through our first public launch.'
            }
            href='https://ttyl.social'
          />

          <BlockItem
            title={'Various places'}
            category={'2016-2019'}
            description={
              'While finishing school, I spent a few years working with various early stage companies like ZebraIQ and PlayVS in a variety of design and engineering roles.'
            }
          />
        </Block>
      </Layout>
    </div>
  );
}
