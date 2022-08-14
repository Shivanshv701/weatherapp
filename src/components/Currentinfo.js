import React from "react";
import '../App.css';
import Forecast from '../components/Forecast'



function Currentinfo() {
  const [weather, setWeather] = React.useState('');
  const [lat, setlat] = React.useState('');
  const [long, setlong] = React.useState('');   
  const [click, setclick] = React.useState(false);
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setlat(position.coords.latitude);
        setlong(position.coords.longitude);
        console.log(lat, long);
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=7b8d6c56df292d95f816f38d57ddd444&units=metric`)
          .then(res => res.json())
          .then(data => {
            setWeather(data);
            setclick(true);
          }).catch(err => console.log(err));
      });
    } else {
      document.getElementById("demo").innerHTML =
        "Geolocation is not supported by this browser.";
    }
  }, [])
  var d = new Date();
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var x = document.getElementById("demo");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
  }

  return (
    <div>
      {
        weather.main !== undefined ? <div className="">
          <br />
          <br />
          <div className="current-head ">
            
            <div style={{ display: 'block' }} className="card current-fcard py-5">
              <div style={{ display: 'block' }} className="card text-center">
                <h4 className="display-4 text-dark">{weather.name}</h4>
              </div>
              <div style={{ display: 'block' }} className="card text-center">
                <h4 className="display-7 my-3">Latitude : {lat}</h4>
              </div>
              <div style={{ display: 'block' }} className="card text-center">
                <h4 className="display-7 ">Longitude : {long}</h4>
              </div>
              <br />
              <div className="card text-center">
                <h1 className="cityname text-black">{days[d.getDay()] + " , " + d.getDate() + " " + months[d.getMonth()]}</h1>
              </div>
            </div>
            <br />
            <br />
            <div>
              <div className="row">
                <div className="card col-md-3 mx-2 card-color1">

                  <div className="card-body ">
                    <br />
                    <h3 className='card-text'><i className="fa-solid fa-temperature-half"></i> {weather.main.temp} <sup> o</sup>C</h3>
                    <h3 className='card-text'>{weather.length !== 0 ? weather.weather[0].main : "Data Unavailable"}<img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img></h3>

                  </div>
                </div>

                <div className="card col-md-4 mx-3 card-color2">
                  <br />
                  <div className="card-body text-center">
                    <h5 className="card-text"><i className="fa-solid fa-temperature-arrow-up"></i> Max. Temp. : {weather.length !== 0 ? weather.main.temp_max : "Data Unavailable"}   </h5>
                    <h5 className="card-text"><i className="fa-solid fa-temperature-arrow-down"></i> Min. Temp. : {weather.length !== 0 ? weather.main.temp_min : "Data Unavailable"} </h5>
                    <h4 className="card-title"><i className="fa-solid fa-wind"></i> Wind Speed: {weather.length !== 0 ? weather.wind.speed : "Data Unavailable"} Km/h</h4>


                  </div>
                </div>

                <div className="card col-md-4 mx-1 card-color3">
                  <br />
                  <div className="card-body text-center">
                    <h4 className="card-title"><i className="fa-solid fa-droplet"></i> Humidity: {weather.length !== 0 ? weather.main.humidity : "Data Unavailable"}%</h4>
                    <h4 className="card-title"><i className="fa-solid fa-fill"></i> Pressure: {weather.length !== 0 ? weather.main.pressure : "Data Unavailable"} hPa </h4>
                    <h4 className="card-title"><i className="fa-solid fa-eye"></i>Visibility: {weather.length !== 0 ? weather.visibility / 1000 : "Data Unavailable"} Km</h4>

                  </div>
                </div>

              </div>
            </div>
          </div>
          <br />
          <br />
          {click && <Forecast lat={lat} lon={long} />}
          <br />
          <br />
        </div> : <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  );
}
export default Currentinfo;
