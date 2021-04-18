import Head from 'next/head';
import Block from '../components/Block';
import Header from '../components/Header';
import BlockItem from '../components/BlockItem';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Parker Henderson</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <section className='content'>
        <div className='content-wrapper wrapper'>
          <main>
            <Block title='About me'>
              <p className='body-lg paragraph'>
                My name is Parker Henderson, currently I work as a product designer at Jumpstart where I focus designing better, more equitable recruiting software. More specifically, I work on our design system and integrations products that allow our customers to supercharge their data and workflows.
              </p>
              <p className="body-lg paragraph">
                Previously, I worked at Red Bull and a few startups you've probably never heard about. I spend my free time thinking and reading about product & design strategy, tinkering with software, and learning new things.
              </p>
            </Block>

            <Block title="Work experience">
              <BlockItem
                title={'Jumpstart'}
                duration={'Current'}
                description={
                  'Jumpstart is a shared talent marketplace that uses diversity data to help recruiters make more informed hiring decisions and give candidates equal opportunity to jobs within their preferred industry. I focus on integrations for our recruiter product and our design system.'
                }
                link='#'
              />

              <BlockItem
                title={'Red Bull Media House'}
                duration={'2019-2020'}
                description={
                  'Red Bull TV brings an inside look into the World of Red Bull straight to your living room and mobile device. Working on a team of three product designers, I currently lead design efforts on Red Bull’s mobile and immersive products across iOS, Android, Oculus, and more.'
                }
                link='#'
              />

              <BlockItem
                title={'Talk to You Live'}
                duration={'2018-2019'}
                description={
                  'TTYL is a voice-first communication app that looked to bring spontaneous and lightweight conversations to your life through technology. I lead design and product through our first public launch.'
                }
                link='#'
              />
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
                        'From prototyping new interactions to digging into type and color systems. I like to think about the details so others can think about the big picture.'
                      }
                    />
                    <BlockItem
                      title={'Facilitation'}
                      description={
                        'Product development is a team sport and making sure teams are consistantly aligned, communicating, and collaborating is key to success.'
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
                          'As designers, we\'re responsible for creating products and experiences that are accessible for to everyone, not just the set of \"ideal\" personas we create.'
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
          </main>

          <aside>
            <ul>
              <li>
                <a href='#' className='body-lg link'>
                  Twitter
                </a>
              </li>
              <li>
                <a href='#' className='body-lg link'>
                  Linkedin
                </a>
              </li>
              <li>
                <a href='#' className='body-lg link'>
                  Github
                </a>
              </li>
              <li>
                <a href='#' className='body-lg link'>
                  Dribble
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
