import React from "react";
import axios from "axios";
import {getData,astroData} from '../ApiCall';


function Astro(){
    getData(astroData);
   console.log(astroData)
  let milisecs1= astroData[0] *1000;
  let  astro1= new Date(milisecs1);
  let milisecs2= astroData[1] *1000;
  let  astro2= new Date(milisecs2);
  let milisecs3= astroData[2] *1000;
  let  astro3= new Date(milisecs3);
  let milisecs4= astroData[3] *1000;
  let  astro4= new Date(milisecs4);
   
   
    return(
        
        <section>
             <article>
             <h1>Astrological Events</h1>
             
             <strong>Sunrise:</strong> <p>{astro1.toLocaleTimeString()}</p>
             <strong>Sunset:</strong> <p>{astro2.toLocaleTimeString()}</p>
            <strong>Moonrise:</strong> <p>{astro3.toLocaleTimeString()}</p>
            <strong>Moonset:</strong> <p>{astro4.toLocaleTimeString()}</p>
            
             
  
        </article>
           
        </section>
    )
}
export default Astro;  