import React,{useState,useEffect} from "react";
import axios from "axios";
import {getData,astroData} from '../ApiCall';


function Astro(){
    getData(astroData);
   console.log(astroData)
   
    return(
        
        <section>
             <article>
             <h1>Astrological Events</h1>
             
             <strong>Sunrise:</strong> <p>{astroData[0]}</p>
             <strong>Sunset:</strong> <p>{astroData[1]}</p>
            <strong>Moonrise:</strong> <p>{astroData[2]}</p>
            <strong>Moonset:</strong> <p>{astroData[3]}</p>
            
             
  
        </article>
           
        </section>
    )
}
export default Astro;  