import React from 'react';
import {astroData,cityData,fourData,getData} from '../ApiCall'
import temp from '../images/thermometer.png'
import feels from '../images/forecast.png'
import cloud from '../images/cloud.png'
import wind from '../images/windy.png'
import humid from '../images/humidity.png'
import rain from '../images/precipitation.png'


function Current(){
  getData(cityData);
    return(
      
        <div>
          <h2 style={styles.h2}>Current Conditions</h2>
          <section style={styles.main}>
             <article style={styles.article}>
               <img src={temp} alt='thermometer icon'/>
             <strong>Temp(F):</strong> 
             <p>{cityData[0]}</p>
             </article>
             <article style={styles.article}>
             <img src={feels} alt='thermometer icon'/>
             <strong>Feels Like(F):</strong>
             <p>{cityData[1]}</p>
             </article>

             <article style={styles.article}>
             <img src={cloud} alt='blue cloud icon'/> 
             <strong>Cloud %:</strong>
             <p>{cityData[4]}</p>
             </article>

             <article style={styles.article}>
             <img src={wind} alt='windy weather icon'/>
             <strong>Wind Speed:</strong>
              <p>{cityData[3]}</p>
              </article>

            <article style={styles.article}>
            <img src={humid} alt='humidity icon'/>
             <strong>Humidity:</strong>
             <p>{cityData[2]}</p>
             </article>

             <article style={styles.article}>
             <img src={rain} alt='rain icon'/>
             <strong>Chance of Precipitation:</strong>
              <p>{cityData[5]}</p>
             </article>
             </section>
        </div>
      
    )
}

export default Current
const styles={

  main: {
      border: '4px solid #020887',
      backgroundColor: 'rgba(27, 153, 139, .8)',
      color: '#FBF5F3',
      borderRadius: '1%',
      padding: '1%',
      margin: '1%',
      boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      height: '50vh'
      
     
  },
  article:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBotom: 10,
        

  },
  img:{
    height: '50px',
    width: '100px',
    boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)',
    alignItems: 'center',
  },
  h2:{
      color:' #020887',
      border: '2px solid #1B998B',
      boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)',
      margin: 'auto',
      width: '50%'
  }
}