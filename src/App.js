import React, { useState } from 'react';
import './App.css';
import './index.css';
import Form from './components/Form';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [weatherSky, setWeatherSky] = useState({});

  const api = {
    key: 'ad9e8a41a3b0321cfbc356d29726abff',
    base: 'https://api.openweathermap.org/data/2.5/',
  };
  const [showInfo, setShowInfo] = useState('none');

  function showDiv() {
    setShowInfo('block');
  }
  function responsing() {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        const weatherMain = result.main;
        const weatherSkys = result.weather[0];

        setCity('');
        setWeather(weatherMain);
        setWeatherSky(weatherSkys);
        // console.log(result);
      });
    alert(`Get ready to see today's weather in ${city}?!`);
    showDiv();
  }

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
        <h3>
          Hamed's Weather App <hr />
        </h3>

        <Form
          city={city}
          setCity={setCity}
          onSubmit={function onSubmit(city) {}}
        />
        <br />

        <button className="button" type="submit" onClick={() => responsing()}>
          {/* alert('ARE YOU READY TO SEE the weather?'))  */}
          Submit
        </button>
        <div className="Answer">
          <div style={{ display: showInfo }}>
            weather is bla bla
            {weatherSky.description}
          </div>
        </div>
      </header>

      <header />
    </div>
  );
}
