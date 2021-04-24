import React from 'react';

export default function Layout({ children }) {
  return (
    <section className='content'>
      <div className='content-wrapper wrapper'>
        <main>{children}</main>
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
  );
}
