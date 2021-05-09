import React from 'react';
import { useRouter } from 'next/router';

export default function CommandPalette(props) {
  const inputRef = React.useRef(null);
  const [inputState, setInputState] = React.useState('');

  const router = useRouter();

  const COMMANDS = [
    {
      name: 'Go to Home',
      command: () => {
        router.push('/');
      },
    },
    {
      name: 'Go to Writing',
      command: () => {
        router.push('/writing');
      },
    },
    {
      name: 'Go to Now',
      command: () => {
        router.push('/now');
      },
    },
  ];

  const handleKeyPress = (e) => {
    setInputState(e.target.value);
  };

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className='command-palette-container' aria-role='dialog'>
      <input type='text' onKeyPress={handleKeyPress} ref={inputRef} tabIndex={0} />
      <div className='command-palette-menu'>
        {COMMANDS.filter((item) => item.name.includes(inputState)).map((cmd, i) => (
          <button className='command-palette-option' onClick={() => cmd.command()} tabIndex={i + 1}>
            {cmd.name}
          </button>
        ))}
      </div>
    </div>
  );
}
