import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

function CityDetails() {
  const { id } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [isForecastVisible, setIsForecastVisible] = useState(false);
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    // Günlük hava durumu verilerini API'den çağırır.
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${id}&appid=cb63c65ddf6066a02ef252b353dfc60f&units=metric`)
      .then(response => setWeatherData(response.data))
      .catch(error => console.log(error));
    
    // 5 günlük hava durumu tahmin verilerini API'den çağırır.
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${id}&appid=cb63c65ddf6066a02ef252b353dfc60f&units=metric`)
      .then(response => {
        setForecastData(response.data)
        // Günlük hava durumu verilerini filtreler
        const dailyData = response.data.list.filter(item => item.dt_txt.includes('12:00:00'))
        setDailyData(dailyData)
      })
      .catch(error => console.log(error));
  }, [id]);

  const toggleForecastVisibility = () => {
    setIsForecastVisible(!isForecastVisible);
  };

  if (!weatherData || !forecastData) {
    return <div className='loading'>Loading...</div>;
  }

  const iconUrl = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <div className='container'>
    <div className='details'> 
      <div className='city-title'>
        <div className='city-title-card'>
        <p className='today'>Today</p>
        <h1>{weatherData.name}</h1>
        <h1>{weatherData.main.temp}°C</h1>
        <div className='city-ozellik'>
          <div className='durum'>
            <img src={iconUrl} alt={weatherData.weather[0].description} />
          </div>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
        <div className='button-container' >
          <button onClick={toggleForecastVisibility}>
            {isForecastVisible ? 'Hide 7 Days' : 'Show 7 Days'}
          </button>
        </div>

        </div>
        </div>
      </div>
       <div  className='sevenday-container'>
       {isForecastVisible && forecastData && (
         <div className='forecast'>
          <div className='seven-title'>                 
            <h2>7 Days Weather</h2>
          </div>
           {dailyData.map((item, index) => (
             <div className='forecast-card' key={index}>
               <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
               <div className='sevenday-space'>
               <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} alt={item.weather[0].description} />
               <p>{item.weather[0].description}</p>
               <p>Temperature: {item.main.temp}°C</p>
               </div>
               <p>Humidity: {item.main.humidity}%</p>
             </div>
           ))}
         </div>
       )}
       </div>
       </div>
  );
}

export default CityDetails;
