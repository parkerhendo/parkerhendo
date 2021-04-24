import React from 'react';

export default function Layout({ children }) {
  return (
    <section className='content'>
      <div className='content-wrapper wrapper'>
        <main>{children}</main>
        <aside>
          <ul>
            <li>
              <a href='https://twitter.com/parkerhendo' target="_blank" className='body-lg link'>
                Twitter
              </a>
            </li>
            <li>
              <a href='https://github.com/parkerhendo' target="_blank" className='body-lg link'>
                Github
              </a>
            </li>
            <li>
              <a href='https://linkedin.com/in/parkerhendo' target="_blank" className='body-lg link'>
                Linkedin
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
