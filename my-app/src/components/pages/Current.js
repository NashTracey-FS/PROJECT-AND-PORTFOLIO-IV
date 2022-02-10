import React from 'react';
import {useState, useEffect } from 'react';

function Current(){
  const [cityData, setCityData] = useState(null);
    useEffect(() => {
        const fetchData = async() =>{
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=dad7eb01cf6140c0ba9161555220702&q=30260&aqi=no`);
          const data = await response.json();
          const [city] = data.results;
    
            setCityData(city)
          }
          
        fetchData()
        .catch (console.error);;
      },[])
    return(
      
        <section>
             <article>
             <h1>Current Conditions</h1>
             <img src={cityData.current.condition.icon}></img>
             <strong>{cityData.current.condition.text}</strong>
             <strong>Temp:</strong> <p>{cityData.current.temp_f}</p>
             <strong>Wind Speed:</strong> <p>{cityData.current.wind_kph}</p>
            <strong>Humidity:</strong> <p>{cityData.current.humidity}</p>
             <strong>Chance of Precipitation:</strong> <p>{cityData.current.precip_in}</p>
  
        </article>
           
        </section>
      
    )
}

export default Current