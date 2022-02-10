import React from 'react';
import {useState, useEffect } from 'react';



function FourDay(){
  const [fourData, setFourData] = useState(null);
    useEffect(() => { 
        const fetchData = async() =>{
          const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=dad7eb01cf6140c0ba9161555220702&q=30260&days=4&aqi=no&alerts=no`);
          const data = await response.json();
          const [four] = data.results;
    
            setFourData(four)
          }
          
        fetchData()
        .catch (console.error);;
      },[])
    return(
        <section>
             <h1>Four Day forecast</h1>
             <div>
                 <h2>Day 1</h2>
             <img src={fourData.forecastday[0].day.condition.icon}></img>
             <strong>{fourData.forecastday[0].day.condition.text}</strong>
             <strong>Temp:</strong> <p>{fourData.forecastday[0].day.maxtemp_f}</p>
             <strong>Wind Speed:</strong> <p>{fourData.forecastday[0].day.maxwind_mph}</p>
            <strong>Humidity:</strong> <p>{fourData.forecastday[0].day.avghumidity}</p>
             <strong>Chance of Precipitation:</strong> <p>{fourData.forecastday[0].day.totalprecip_in}</p>
             </div>

             <div>
             <h2>Day 2</h2>
             <img src={fourData.forecastday[1].day.condition.icon}></img>
             <strong>{fourData.forecastday[1].day.condition.text}</strong>
             <strong>Temp:</strong> <p>{fourData.forecastday[1].day.maxtemp_f}</p>
             <strong>Wind Speed:</strong> <p>{fourData.forecastday[1].day.maxwind_mph}</p>
            <strong>Humidity:</strong> <p>{fourData.forecastday[1].day.avghumidity}</p>
             <strong>Chance of Precipitation:</strong> <p>{fourData.forecastday[1].day.totalprecip_in}</p>
             </div>

             <div>
             <h2>Day 3</h2>
             <img src={fourData.forecastday[2].day.condition.icon}></img>
             <strong>{fourData.forecastday[2].day.condition.text}</strong>
             <strong>Temp:</strong> <p>{fourData.forecastday[2].day.maxtemp_f}</p>
             <strong>Wind Speed:</strong> <p>{fourData.forecastday[2].day.maxwind_mph}</p>
            <strong>Humidity:</strong> <p>{fourData.forecastday[2].day.avghumidity}</p>
             <strong>Chance of Precipitation:</strong> <p>{fourData.forecastday[2].day.totalprecip_in}</p>
             </div>

             <div>
             <h2>Day 4</h2>
             <img src={fourData.forecastday[3].day.condition.icon}></img>
             <strong>{fourData.forecastday[3].day.condition.text}</strong>
             <strong>Temp:</strong> <p>{fourData.forecastday[3].day.maxtemp_f}</p>
             <strong>Wind Speed:</strong> <p>{fourData.forecastday[3].day.maxwind_mph}</p>
            <strong>Humidity:</strong> <p>{fourData.forecastday[3].day.avghumidity}</p>
             <strong>Chance of Precipitation:</strong> <p>{fourData.forecastday[3].day.totalprecip_in}</p>
             </div>
             </section>
    )
}

export default FourDay