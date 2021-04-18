import React from 'react';

export default function Header() {
  return (
    <div className='header'>
      <div className='header-wrapper wrapper'>
        <div className='title-group'>
          <h1 className='tite title-lg'>Parker Henderson</h1>
          <h2 className='subtitle title-sm'>Designer. Engineer. Tinkerer. Thinker.</h2>
        </div>
        <nav className='site-nav'>
          <a href='#' className='body-lg link internal'>
            Home
          </a>
          <a href='#' className='body-lg link internal'>
            About
          </a>
          <a href='#' className='body-lg link internal'>
            Work
          </a>
        </nav>
      </div>
    </div>
  );
}
