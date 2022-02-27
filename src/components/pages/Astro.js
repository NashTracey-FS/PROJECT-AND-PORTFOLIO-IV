import React from "react";
import axios from "axios";
import {getData,astroData} from '../ApiCall';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';
import moonrise from '../images/moonrise.png';
import moonset from '../images/moonset.png';


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
        <div>
         <h2 style={styles.h2}>Astrological Events</h2>
        <section style={styles.main}>
             <article style={styles.article}>
                 <img style={styles.img} src={sunrise} alt="sunrise icon"/>
             <strong>Sunrise:</strong> <p>{astro1.toLocaleTimeString()}</p>
             </article>

             <article style={styles.article}>
             <img style={styles.img} src={sunset} alt="sunset icon"/>
             <strong>Sunset:</strong> <p>{astro2.toLocaleTimeString()}</p>
             </article>

             <article style={styles.article}>
             <img style={styles.img} src={moonrise} alt="moonrise icon"/>
            <strong>Moonrise:</strong> <p>{astro3.toLocaleTimeString()}</p>
            </article>

            <article style={styles.article}>
            <img style={styles.img} src={moonset} alt="moonset icon"/>
            <strong>Moonset:</strong> <p>{astro4.toLocaleTimeString()}</p>
            </article>
           
        </section>
        </div>
    )
}
export default Astro;  

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
      height: '100px',
      width: '100px',
      alignItems: 'center',
      background:'#FBF5F3',
      boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)',
      
    },
    h2:{
        color:' #020887',
        border: '2px solid #1B998B',
        boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)',
        margin: 'auto',
        width: '50%'
    }
  }