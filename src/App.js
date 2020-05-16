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

  function responsing() {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        const weatherMain = result.main;
        const weatherSkys = result.weather[0];

        setCity('');
        setWeather(weatherMain);
        setWeatherSky(weatherSkys);
        console.log(result);
      });
    alert(`Get ready to see today's weather in ${city}?!`);
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
        <div>
          <h1 className="Div">Hamed's Weather App</h1>
          <hr />
          Write down your city name to get
          <h3>current weather </h3>
          {/* {weather.weather.main.feels_like} */}
          this is city's
          <Form
            city={city}
            setCity={setCity}
            onSubmit={function onSubmit(city) {}}
          />
          <br />
          {weather.temp}
          <br />
          {weatherSky.description}
          <button className="button" type="submit" onClick={() => responsing()}>
            {/* alert('ARE YOU READY TO SEE the weather?'))  */}
            Submit
          </button>
          <div> here we go</div>
          {/* <Weather /> Here comes the weather */}
        </div>
      </header>
    </div>
  );
}
