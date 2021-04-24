import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-wrapper wrapper'>
        <div className='title-group'>
          <h1 className='tite title-lg'>Parker Henderson</h1>
          <h2 className='subtitle title-sm'>Designer. Engineer. Tinkerer. Thinker.</h2>
        </div>
        <nav className='site-nav'>
          <Link href='/'>
            <a className='body-lg link'>Home</a>
          </Link>
          <Link href='/now'>
            <a className='body-lg link'>Now</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
