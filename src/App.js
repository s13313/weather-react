import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Form from './components/Form';
// import Weather from './components/Weather';

function App() {
  const [city, setCity] = useState('Vienna');
  const [weather, setWeather] = useState({});

  const api = {
    key: '',
  };
  useEffect(function getWeather() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api.key}
  `)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  }, []);

  //this return weather infos to App.js

  return (
    <div className="App">
      <header className="App-header">
        Write down your city name to get current weather
        <br />
        <br />
        <div>here come</div>
        <Form city={city} setCity={setCity} />
        <br />
        <div>weather is </div>
        {/* <Weather /> Here comes the weather */}
      </header>
    </div>
  );
}

export default App;
