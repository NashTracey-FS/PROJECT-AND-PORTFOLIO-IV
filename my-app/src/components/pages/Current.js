import React from 'react';
import {astroData,cityData,fourData,getData} from '../ApiCall'



function Current(){
  getData(cityData);
    return(
      
        <section style={styles.main}>
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
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
     
  },
}