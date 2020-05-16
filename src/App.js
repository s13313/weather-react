import React, { useState } from 'react';
import './App.css';
import './index.css';
import Form from './components/Form';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const api = {
    key: 'ad9e8a41a3b0321cfbc356d29726abff',
    base: 'https://api.openweathermap.org/data/2.5/',
  };
  // useEffect(
  //   function Weather(props) {
  //     // fetch(`${api.base}weather?q=${cityFinal}&units=metric&APPID=${api.key}`)
  //     //   .then((res) => res.json())
  //     //   .then((result) => {
  //     //     const weatherPromise = result;
  //     //     setWeather(weatherPromise);
  //     //     console.log(weatherPromise);
  //     //   });
  //   },
  //   [api.key, api.base, city],
  // );
  return (
    <div className="App">
      <header className="App-header">
        Write down your city name to get current weather
        <br />
        <br />
        {city}
        <br />
        {weather.timezone}
        <div>here come</div>
        <Form
          city={city}
          setCity={setCity}
          onSubmit={function onSubmit(city) {}}
        />
        <br />
        <button
          className="button"
          type="submit"
          onClick={() =>
            fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
              .then((res) => res.json())
              .then((result) => {
                const weatherPromise = Object(result);
                setWeather(weatherPromise);
                console.log(weatherPromise);
              })
          }
        >
          {/* alert('ARE YOU READY TO SEE the weather?'))  */}
          Submit
        </button>
        <div>weather is </div>
        {/* <Weather /> Here comes the weather */}
      </header>
    </div>
  );
}
