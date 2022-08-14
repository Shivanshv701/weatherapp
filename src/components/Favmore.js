import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import '../App.css'

import { useParams } from "react-router-dom";
import Forecast from '../components/Forecast';
import 'react-toastify/dist/ReactToastify.css';

function Favmore() {
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [click, setclick] = useState(false);
    const { city } = useParams()



    useEffect(() => {
        getWeatherDetails(city)
    }, []);

    const getWeatherDetails = async (cityname) => {
        if (!cityname) return
        await axios.get(`https://watchlist-weatherapp.herokuapp.com/getapi/weather/getCity/?city=${cityname}`)
            .then(res => res.data)
            .then(data => setData(data)).catch((err) => {
                console.log('Error : ', err)
            })
        setLoaded(true)
        setclick(true)
    }

    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (loaded) {
        console.log(loaded)
        var lon = data.coord.lon;
        var lat = data.coord.lat;
        return (
            <div className="bg-color">
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <div className="card text-center py-3 px-2 fav-head">
                    <h1 className="cityname text-dark">{data.name}</h1>
                    <h3 className="cityname text-dark">{days[d.getDay()] + " , " + d.getDate() + " " + months[d.getMonth()]}</h3>
                </div>
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="card col-md-3 mx-2 card-color1">

                            <div className="card-body ">
                                <br />
                                <h3 className='card-text'><i class="fa-solid fa-temperature-half"></i> {data.main.temp} <sup> o</sup>C</h3>
                                <h3 className='card-text'>{data.length !== 0 ? data.weather[0].main : "Data Unavailable"}<img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img></h3>

                            </div>
                        </div>

                        <div className="card col-md-4 mx-3 card-color2">
                            <br />
                            <div className="card-body text-center">
                                <h5 className="card-text"><i class="fa-solid fa-temperature-arrow-up"></i> Max. Temp. : {data.length !== 0 ? data.main.temp_max : "Data Unavailable"}   </h5>
                                <h5 className="card-text"><i class="fa-solid fa-temperature-arrow-down"></i> Min. Temp. : {data.length !== 0 ? data.main.temp_min : "Data Unavailable"} </h5>
                                <h4 className="card-title"><i class="fa-solid fa-wind"></i> Wind Speed: {data.length !== 0 ? data.wind.speed : "Data Unavailable"} Km/h</h4>


                            </div>
                        </div>

                        <div className="card col-md-4 mx-1 card-color3">
                            <br />
                            <div className="card-body text-center">
                                <h4 className="card-title"><i class="fa-solid fa-droplet"></i> Humidity: {data.length !== 0 ? data.main.humidity : "Data Unavailable"}%</h4>
                                <h4 className="card-title"><i class="fa-solid fa-fill"></i> Pressure: {data.length !== 0 ? data.main.pressure : "Data Unavailable"} hPa </h4>
                                <h4 className="card-title"><i class="fa-solid fa-eye"></i>Visibility: {data.length !== 0 ? data.visibility / 1000 : "Data Unavailable"} Km</h4>

                            </div>
                        </div>

                    </div>

                    <div>

                        <br />

                        <br />

                        {click && <Forecast lat={lat} lon={lon} />}

                    </div>

                </div>

                <br />

                <br />

                <br />

                <br />

                <br />

            </div>

        );

    }

}

export default Favmore