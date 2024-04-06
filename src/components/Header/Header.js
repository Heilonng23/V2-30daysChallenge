import React, { useState, useEffect } from 'react';
import './header.css'; 

const TypingHeader = () => {
  const [name, setName] = useState(() => localStorage.getItem('name') || '');
  const [typedHello, setTypedHello] = useState('');
  const [typedName, setTypedName] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const helloText = "Hello, ";
  const delay = 200; 

  useEffect(() => {
    let timer;
    if (startTyping) {
      // Typing "Hello"
      timer = setTimeout(() => {
        const nextChar = helloText[typedHello.length];
        if (nextChar) {
          setTypedHello(typedHello + nextChar);
        } else {
          timer = setTimeout(() => {
            const nextChar = name[typedName.length];
            if (nextChar) {
              setTypedName(typedName + nextChar);
            }
          }, delay);
        }
      }, delay);
    }
    return () => clearTimeout(timer);
  }, [typedHello, typedName, startTyping, name]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setStartTyping(true);
    }
  };

  // Save name to local storage when it changes
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  return (
    <div className='container'>
      <h1 className='header'>{typedHello} {startTyping && <span className='name'>{typedName}</span>}</h1>
      <h4>- Fake it till you make it -</h4>
      <hr className='headerhr' />
      {!startTyping && (
        <input
          className='input1'
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
    </div>
  );
};

export default TypingHeader;
