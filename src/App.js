import React, { useState } from 'react';
import './App.css';
import './index.css';
import Form from './Form';

export default function App() {
  const [city, setCity] = useState('');
  const [showInfo, setShowInfo] = useState('none');
  const [weather, setWeather] = useState({});
  const [weatherSky, setWeatherSky] = useState({});

  const api = {
    key: 'ad9e8a41a3b0321cfbc356d29726abff',
    base: 'https://api.openweathermap.org/data/2.5/',
  };

  function showDiv() {
    setShowInfo('block');
  }
  function hideDiv() {
    setShowInfo('none');
  }
  function responsing() {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        const weatherMain = result.main;
        const weatherSkys = result.weather[0];

        setWeather(weatherMain);
        setWeatherSky(weatherSkys);
        console.log(result);
      })
      .catch((err) => {
        alert('City not found!');
        hideDiv();
        return;
      });
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
    <>
      <header className="App-header">
        <h3>
          Hamed's Weather App <hr />
        </h3>
        <Form
          city={city}
          setCity={setCity}
          setShowInfo={showInfo}
          onSubmit={function onSubmit(city) {}}
        />
        <br />
        <button className="button" type="submit" onClick={() => responsing()}>
          {/* alert('ARE YOU READY TO SEE the weather?'))  */}
          Submit
        </button>

        <div className="Answer">
          <div
            style={{
              boxShadow: '5px 4px 5px 4px',
              display: showInfo,
              opacity: 0.9,
              backgroundColor: 'lightgray',
              color: 'black',
              marginLeft: '95px',
              marginRight: '100px',
            }}
          >
            <h5 style={{ paddingTop: '10px' }}>
              {city}'s weather on {new Date().toLocaleTimeString()}.
            </h5>
            <hr />
            ***{weatherSky.description} ***
            <br /> <br />
            Current temperture: {weather.temp}°C.
            <br />
            Feeling like: {weather.feels_like} °C
            <br />
            Highest temperture:{weather.temp_max} °C
            <br />
            Lowest temperture:{weather.temp_min} °C
            <br />
          </div>
        </div>
      </header>

      <header />
    </>
  );
}
