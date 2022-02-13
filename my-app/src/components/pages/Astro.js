import React from "react";
import {astroData,cityData,fourData,getData} from '../ApiCall'



function Astro(){
   getData();

   
    return(
    
        <section>
             <article>
             <h1>Astrological Events</h1>
             <img src= {<Astro/>} ></img>
             <strong>Sunrise:</strong> <p>{astroData[0]}</p>
             <strong>Sunset:</strong> <p>{astroData[1]}</p>
            <strong>Moonrise:</strong> <p>{astroData[2]}</p>
            <strong>Moonset:</strong> <p>{astroData[3]}</p>
            
             
  
        </article>
           
        </section>
    )
}
export default Astro;  