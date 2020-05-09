import React from 'react';
import logo from './logo.svg';
import './App.css';

import {NavBars, News, Schedule} from './page';

function App() {
  return (

    <div className="container">
      <NavBars/>
      <div className="content">
        <News/>
        <Schedule/>
      </div>
    </div>

  );
}

export default App;
