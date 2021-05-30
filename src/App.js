import React, { useRef, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Results } from './Results';

const Api_Key = "?key=c39f75355d06400182a102418211504";

function App() {

  const [weatherData, setweatherData] = useState({});
  const [showResults, setShowResults] = useState(false)

  const getData = async (name) => {
    let url = "https://api.weatherapi.com/v1/current.json" + Api_Key + "&q=" + name + "&aqi=yes";
    let response = await fetch(url);
    let data = await response.json();
    setweatherData(data);

    console.log(data, "weather", weatherData)
  }

  let location = useRef("")


  const handleClick = async () => {

    location.current.value !== "" ? await getData(location.current.value)
      : location.current.value = "Enter info first"
    setShowResults(true);
  }


  return (
    <div className="App">
      <h1>Weather and Polution </h1>
      <div>
        <input type="text" ref={location} />
        <button className="getInfo" onClick={handleClick}>Get Info</button>
      </div>

      { showResults && weatherData && <Results data={weatherData} />}
    </div>
  );
}

export default App;
