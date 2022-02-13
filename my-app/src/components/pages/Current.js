import React from 'react';
import {astroData,cityData,fourData,getData} from '../ApiCall'



function Current(){
 getData();
    return(
      
        <section>
             <article>
             <h1>Current Conditions</h1>
             <strong>Temp(F):</strong> <p>{cityData[0]}</p>
             <strong>Feels Like(F):</strong><p>{cityData[1]}</p>
             <strong>Cloud %:</strong><p>{cityData[4]}</p>
             <strong>Wind Speed:</strong> <p>{cityData[3]}</p>
            <strong>Humidity:</strong> <p>{cityData[2]}</p>
             <strong>Chance of Precipitation:</strong> <p>{cityData[5]}</p>
  
        </article>
           
        </section>
      
    )
}

export default Current
