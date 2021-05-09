import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-wrapper wrapper'>
        <div className='title-group'>
          <Link href='/'>
            <h1 className='title title-lg'>Parker Henderson</h1>
          </Link>
          <h2 className='subtitle title-sm'>Designer. Engineer. Tinkerer. Thinker.</h2>
        </div>
        <nav className='site-nav'>
          <Link href='/'>
            <a className='body-lg link'>Home</a>
          </Link>
          {/* <Link href='/writing'>
            <a className='body-lg link'>Writing</a>
          </Link> */}
          <a
            href='https://www.goodreads.com/user/show/55640023-parker-henderson'
            target='_blank'
            className='body-lg link'
          >
            Reading List
          </a>
          <Link href='/now'>
            <a className='body-lg link'>Now</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
