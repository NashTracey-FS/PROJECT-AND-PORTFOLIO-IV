import React from "react";
import axios from "axios";

   export let astroData =[];
   export let cityData=[];
   export let fourData=[];
   

  export  async function getData() {
    const axios = require('axios');
        try {
          const response = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.578477&lon=-84.340117&units=imperial&appid=96203ae9ca7ca6287795be6c0d2ca9be');
          console.log(response);
          astroData=[response.data.current.sunrise,response.data.current.sunset,response.data.daily[0].moonrise,response.data.daily[0].moonset,response.data.daily[0].moon_phase];
          cityData=[response.data.daily[0].temp.max,response.data.daily[0].feels_like.day,response.data.daily[0].humidity,response.data.daily[0].wind_speed,response.data.daily[0].clouds,response.data.daily[0].pop];
          fourData=[response.data.daily[1].temp.max,response.data.daily[2].temp.max,response.data.daily[3].temp.max,response.data.daily[4].temp.max]
          console.log(astroData);
          console.log(cityData);
          console.log(fourData);
          return astroData && cityData && fourData
        } catch (error) {
          console.error(error);
        }
      }
 


