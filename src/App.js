import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Form from './components/form';
import Weather from './components/getWeather';
const Api = '6e7e23b41e6570748e2fed6fa094b242';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Write down your city name to get current weather
        <br />
        <br />
        <Form />
        <br />
        <Weather /> {/*Here comes the weather */}
      </header>
    </div>
  );
}

export default App;
