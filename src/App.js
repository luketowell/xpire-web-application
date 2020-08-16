import React from 'react';
import './css/style.css';
import Navigation from './components/Navigation/Navigation';

import { ENV } from './constants';

function App() {

  console.log(`app running in the ${ENV} environment`)
  return (
    <div className="App">
      <Navigation/>
    </div>
  );
}

export default App;
