import React from 'react';
import './css/style.css';
import Home from './pages/home';
import Login from './pages/login';
import StoreInfo from './pages/storeInfo';
import Metrics from './pages/metrics';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Home/>
      <Login/>
      <StoreInfo/>
      <Metrics/>
    </div>
  );
}

export default App;
