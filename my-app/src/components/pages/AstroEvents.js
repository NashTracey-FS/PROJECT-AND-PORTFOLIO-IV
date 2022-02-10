import React from 'react';
import {useState, useEffect } from 'react';
import Astro from '../images/astro.jpg'


function AstroEvents(){
    const [astroData,setAstroData] = useState(null);
    useEffect(() => {
        const fetchData = async() =>{
          const response = await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=dad7eb01cf6140c0ba9161555220702&q=30260&dt=2022-02-10`);
          const data = await response.json();
          const [astro] = data.results;
    
            setAstroData(astro)
          }
          
        fetchData()
        .catch (console.error);;
      },[])
    return(
        <section>
             <article>
             <h1>Astrological Events</h1>
             <img src= {<Astro/>} ></img>
             <strong>Sunrise:</strong> <p>{astroData.astronomy.astro.sunrise}</p>
             <strong>Sunset:</strong> <p>{astroData.astronomy.astro.sunset}</p>
            <strong>Moonrise:</strong> <p>{astroData.astronomy.astro.moonrise}</p>
            <strong>Moonset:</strong> <p>{astroData.astronomy.astro.moonset}</p>
            <strong>Moon Phase:</strong> <p>{astroData.astronomy.astro.moon_phase}</p>
             <strong>Moon Illumination:</strong> <p>{astroData.astronomy.astro.moon_illumination}</p>
  
        </article>
           
        </section>
    )
}
export default AstroEvents;