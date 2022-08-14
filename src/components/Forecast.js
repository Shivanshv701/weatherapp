import React, { useEffect, useState } from "react";
import axios from "axios";
import '../components/Forecast.css';

function Forecast(props) {
  const [hourdata, setHourdata] = useState('');
  const [loaded ,setLoaded] = useState(false);

  const getforecast = async () => {
      let lat = 19.0144;
      let lon = 72.8479;
      await axios.get(`https://watchlist-weatherapp.herokuapp.com/getapi/forecast/daily/?lat=${props.lat}&lon=${props.lon}`)
      .then(res => res.data)
      .then(data => getformatforecast(data))
      .catch((err) => {
        console.log('Error : ', err)
      })
      setLoaded(true);
    }

  function getformatforecast(data) {
    var tempdata = {
      dailydata: data.daily.slice(0, 6),
      hourlydata : data.hourly.slice(0,6)      
    }
    
    setHourdata(tempdata);

  }
  useEffect(() => {
    getforecast();
    
  }, [])
  
  if(loaded){
  

  return (
    <div>
      <hr/>
      <h1  className="text-center text-white">Forecast</h1>
      
      <div className="card container text-center main ">
        <div className="card-body card1">
          
          <h3>{hourdata.cityname}</h3>
          
          <h4 className="text-dark">HOURELY FORECAST</h4>
          <hr />
          <div className='row'>
            <div className='col-md-3'>
              <h5>1 H</h5>
              <div className="card">
                <img className="for"  src={`http://openweathermap.org/img/wn/${hourdata.hourlydata[0].weather[0].icon}@2x.png`} alt="" />
                <span>{hourdata.hourlydata[1].weather[0].main}</span>
                <div className="card-body card1">
                  {hourdata.hourlydata[0].temp + '℃' }
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <h5>2 H</h5>
              <div className="card">
                <img className="for" src={`http://openweathermap.org/img/wn/${hourdata.hourlydata[1].weather[0].icon}@2x.png`} alt="" />
                <span>{hourdata.hourlydata[1].weather[0].main}</span>
                <div className="card-body card1">
                  {hourdata.hourlydata[1].temp + '℃' }
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <h5>3 H</h5>
              <div className="card">
                <img className="for" src={`http://openweathermap.org/img/wn/${hourdata.hourlydata[2].weather[0].icon}@2x.png`} alt="" />
                <span>{hourdata.hourlydata[2].weather[0].main}</span>
                <div className="card-body card1">
                 {hourdata.hourlydata[2].temp + '℃' }
                </div>
              </div>
            </div>
            <div className='col-md-3'>
              <h5>4 H</h5>
              <div className="card">
                <img className="for" src={`http://openweathermap.org/img/wn/${hourdata.hourlydata[3].weather[0].icon}@2x.png`} alt="" />
                <span>{hourdata.hourlydata[3].weather[0].main}</span>
                <div className="card-body card1">
                  {hourdata.hourlydata[3].temp + '℃' }
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h4 className="text-dark">Forecast For Next Days</h4>
          <hr />
          <div className='row'>
            <div className='col-md-3'>
            <h5>1 Day</h5>
              <div className="card">
                <img className="for" src={`http://openweathermap.org/img/wn/${hourdata.dailydata[0].weather[0].icon}@2x.png`} alt="" />
                <span>{hourdata.dailydata[0].weather[0].main}</span>
                <div className="card-body card1">
                  {hourdata.dailydata[0].temp.day + '℃' }
                </div>
              </div>
            </div>
            <div className='col-md-3'>
            <h5>2 Day</h5>
              <div className="card">
                <img className="for" src={`http://openweathermap.org/img/wn/${hourdata.dailydata[1].weather[0].icon}@2x.png`} alt="" />
                <span>{hourdata.dailydata[1].weather[0].main}</span>
                <div className="card-body card1">
                  {hourdata.dailydata[1].temp.day + '℃' }
                </div>
              </div>
            </div>
            <div className='col-md-3'>
            <h5>3 Day</h5>
              <div className="card">
                <img className="for" src={`http://openweathermap.org/img/wn/${hourdata.dailydata[2].weather[0].icon}@2x.png`} alt="" />
                <span>{hourdata.dailydata[2].weather[0].main}</span>
                <div className="card-body card1">
                 {hourdata.dailydata[2].temp.day + '℃'} 
                </div>
              </div>
            </div>
            <div className='col-md-3'>
            <h5>4 Day</h5>
              <div className="card">
                <img className="for" src={`http://openweathermap.org/img/wn/${hourdata.dailydata[3].weather[0].icon}@2x.png`} alt="" />
                <span >{hourdata.dailydata[3].weather[0].main}</span>
                <div className="card-body card1">
                  {hourdata.dailydata[3].temp.day + '℃' } 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }
}

export default Forecast