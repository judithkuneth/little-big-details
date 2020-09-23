import React, { useState } from 'react';
import './App.css';
import Lama from './lama.jpg';
import Logo from './logo.svg';
import { jsx, css } from '@emotion/core';

function App() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Little Big Details</h1>
      </header>
      <body className="App-body">
        <div>
          <h1> Hello there</h1>
          <p>Ready for some React onHover Event Handling?</p>
          <p>
            Got this from:
            https://upmostly.com/tutorials/react-onhover-event-handling-with-examples
          </p>
          <div>
            <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              Hover over me!
            </button>
            {isShown && (
              <div>
                <img src={Lama} alt=""></img>
                <h1>I'll appear when you hover over the button.</h1>
              </div>
            )}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
