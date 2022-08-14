import React, { useEffect, useState, useContext } from "react";
import axios from 'axios';
import logo from '../img/cloudy.png'
import '../App.css'
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import Forecast from '../components/Forecast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [data, setData] = useState([]);
  const [loaded ,setLoaded] = useState(false);
  const [click , setclick] = useState(false);
  const [inputCity, setInputCity] = useState('');
  const { state, dispatch } = useContext(UserContext);
  const navi = useNavigate();

  const token  = localStorage.getItem('token');

  const fav = () =>{
    if(token)
    {
      axios.post('https://watchlist-7199.herokuapp.com/api/add', 
      { "cityname" : data.name , "temp": data.main.temp, "max_temp": data.main.temp_max, "min_temp": data.main.temp_min},
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }).then(res => setInputCity([...data.name, res.data]))
      .then(()=>{
        toast.success('Added successfullly!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
      .catch((err)=>{
        if(err.response.status === 409){
          toast.error('City Already Added', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
        });
        }
      });
      navi('/', {replace:true});
    }
    else {
      toast.error(' Login for Add to Favorite!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
    });
  }
  };
  
  useEffect(() => {
      getWeatherDetails('Barabanki')
  },[]);



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


  const changeHandler = (e) => {
    
    setInputCity(e.target.value)
  }
  const searchHandler = () => {
    setclick(false)
    getWeatherDetails(inputCity)

  }

  var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if(loaded){
    console.log(loaded)
    var lon = data.coord.lon;
    var lat = data.coord.lat;
    
    return (
    <div className="bg-color">
      <div className="container">
        <br />
        <br/>
        
      
        <div className="row topm">
            
            <div className="home-logo1 ">
            <img className="home-logo2" src={logo} alt="welcome img"></img>
            </div>
            <div className="logo-text ">
            <p className='logo-text1 text-dark'>WEATHER APP</p>
            </div>
           
          
        </div>
        <br/>
        <br/>
        <div className="input-group">
          <input type="search" className="form-control rounded offset-1 py-3" /* value={inputCity} */ name="city" onChange={changeHandler}   placeholder="Search for City......" aria-label="Search" aria-describedby="search-addon" />
          <button type="button" className="btn btn-outline-primary bg-dark col-md-1" onClick={searchHandler}><h4 className="mt-3 text-white"><i className="fas fa-search"></i></h4></button>
        </div>
      </div>
      <br />
      <br/>

      <div className="text-center ">
        <h1 className="cityname">{data.name}</h1>

        <h3 className="cityname">{days[d.getDay()] + " , " + d.getDate() + " " + months[d.getMonth()]}</h3>
        <button onClick={fav} className="btn btn-success">Add to Favourite</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
      <div className="container">
        <br />
        <div className="row">
          <div className="card col-md-3 mx-2 card-color1">

            <div className="card-body text-center ">
              <br/>
              <h3 className='card-text'><i className="fa-solid fa-temperature-half"></i> {data.main.temp} <sup> o</sup>C</h3>
              <h3 className='card-text'>{data.length !== 0 ? data.weather[0].main : "Data Unavailable"}<img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}></img></h3>
              
            </div>
          </div>

          <div className="card col-md-4 mx-3 card-color2">
            <br />
            <div className="card-body text-center">
              <h5 className="card-text"><i className="fa-solid fa-temperature-arrow-up"></i> Max. Temp. : {data.length !== 0 ? data.main.temp_max : "Data Unavailable"}   </h5>
              <h5 className="card-text"><i className="fa-solid fa-temperature-arrow-down"></i> Min. Temp. : {data.length !== 0 ? data.main.temp_min : "Data Unavailable"} </h5>
              <h4 className="card-title"><i className="fa-solid fa-wind"></i> Wind Speed: {data.length !== 0 ? data.wind.speed : "Data Unavailable"} Km/h</h4>
              

            </div>
          </div>

          <div className="card col-md-4 mx-1 card-color3">
            <br />
            <div className="card-body text-center">
              <h4 className="card-title"><i className="fa-solid fa-droplet"></i> Humidity: {data.length !== 0 ? data.main.humidity : "Data Unavailable"}%</h4>
              <h4 className="card-title"><i className="fa-solid fa-fill"></i> Pressure: {data.length !== 0 ? data.main.pressure : "Data Unavailable"} hPa </h4>
              <h4 className="card-title"><i className="fa-solid fa-eye"></i>Visibility: {data.length !== 0 ? data.visibility / 1000 : "Data Unavailable"} Km</h4>

            </div>
          </div>

        </div>
        <div>

          {click && <Forecast  lat={lat} lon={lon} /> }
         
        </div>

      </div>
      <br />
      <br />
    </div>

  );
  }
}

export default Home