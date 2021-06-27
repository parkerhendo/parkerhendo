import Head from 'next/head';
import Block from '../components/Block';
import Header from '../components/Header';
import BlockItem from '../components/BlockItem';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div className='container'>

      <Header />

      <Layout>
        <Block title='👋 Welcome'>
          <p className='body-lg paragraph'>
            Hi, I'm Parker, a coffee enthusiast, product designer,{' '}
            <a href='https://github.com/parkerhendo' target='_blank' className='link inline highlight'>
              programmer
            </a>
            ,{' '}
            <a
              href='https://www.goodreads.com/user/show/55640023-parker-henderson'
              target='_blank'
              className='link inline highlight'
            >
              avid reader
            </a>
            , and{' '}
            <a href='https://twitter.com/parkerhendo' target='_blank' className='link inline highlight'>
              tweeter
            </a>
            . I'm currently designing recruiting software and building design systems at{' '}
            <a href='https://canvas.com' className='link inline highlight' target='_blank'>
              Canvas
            </a>
            . Previously, I worked at Red Bull and some startups, most of which you've probably never heard
            about.
          </p>
        </Block>

        <div className='skills-values'>
          <div className='skills-values-wrapper'>
            <div className='skills col col-1'>
              <Block title='Skills'>
                <BlockItem
                  title={'Systems design'}
                  description={
                    "Everything we build is a system itself or embedded in a larger one. The ability to understand how all the pieces fit together is critical when designing."
                  }
                />
                <BlockItem
                  title={'Interaction & visual design'}
                  description={
                    "From prototyping new interactions to designing into type and color systems, I enjoy diving into the details to create novel and expressive interfaces."
                  }
                />
                <BlockItem
                  title={'Software engineering'}
                  description={
                    "I believe code is a powerful design tool and use my experience as a designer and engineer to establish systems, tools, and processes across our teams."
                  }
                />
              </Block>
            </div>
            <div className='skills col col-2'>
              <Block title='Values'>
                <BlockItem
                  title={'Inclusive and diverse teams'}
                  description={
                    'When we intentionally seek diversity in our teams and ensure everyone has a voice in the decisions affecting our work, we produce better results.'
                  }
                />
                <BlockItem
                  title={'Accessibility'}
                  description={
                    'As designers, we\'re responsible for creating products and experiences accessible to everyone, not just a customer persona or the majority.'
                  }
                />
                <BlockItem
                  title={'Growth'}
                  description={
                    'I believe in building a culture that concentrates on championing the growth of individuals and teams to learn new things and grow from both success and failure.'
                  }
                />
              </Block>
            </div>
          </div>
        </div>
        <Block title='Work experience'>
          <BlockItem
            title={'Canvas'}
            category={'2020 - Current'}
            description={
              'Canvas (f.k.a Jumpstart) is a shared talent marketplace that uses diversity data to help recruiters make more informed hiring decisions and give candidates equal employment opportunities within their preferred industry. I focus on integrations for our recruiter product and our design system.'
            }
            href='https://canvas.com'
          />

          <BlockItem
            title={'Red Bull Media House'}
            category={'2019 - 2020'}
            description={
              'Red Bull TV brings an inside look into the World of Red Bull straight to your living room and mobile device. Working on a team of three product designers, I previously lead design efforts on Red Bull’s mobile and immersive products across iOS, Android, Oculus, and more.'
            }
            href='https://redbull.com/tv'
          />

          <BlockItem
            title={'Talk to You Live'}
            category={'2018 - 2019'}
            description={
              'TTYL is a voice-first communication app that looked to bring spontaneous and lightweight conversations to your life through technology. I lead design and product through the public launch of our first product.'
            }
            href='https://ttyl.social'
          />

          <BlockItem
            title={'Various places'}
            category={'2016 - 2019'}
            description={
              'While finishing school, I spent a few years working with various early-stage companies like ZebraIQ and PlayVS across different design and engineering-focused roles.'
            }
          />
        </Block>
      </Layout>
    </div>
  );
}
