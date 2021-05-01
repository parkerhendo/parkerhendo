import React from 'react';
import dynamic from 'next/dynamic';
import CommandPalette from './CommandPalette';

const Modal = dynamic(() => import('./Modal'), { ssr: false });

export default function Header() {
  const [showPalette, setShowPalette] = React.useState(false);
  
  let keysPressed = {};
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      keysPressed[e.key] = true;
      if (keysPressed['Meta'] && keysPressed['k']) {
        setShowPalette(true);
      }

      if (keysPressed['Escape']) {
        setShowPalette(false);
        keysPressed = {};
      }
    }

    const handleKeyUp = (e) => {
      delete keysPressed[e.key];
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);


    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, []);
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
      <Modal id='modal-root'>
        {showPalette && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.3',
            }}
          >
            <CommandPalette />
          </div>
        )}
      </Modal>
    </div>
  );
}
