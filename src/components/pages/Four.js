import React from 'react';
import {fourData,getData} from '../ApiCall'
import forecast from '../images/weatherforecast.png';
import daily from '../images/thermometer.png'


function FourDay(){
    getData(fourData);
    console.log(fourData);
    return(
        <div>
            <h2 style={styles.h2}>Four Day Forecast</h2> 
            <section style={styles.main}>
            <article>
                <img src={forecast} alt='forecast icon'/>
            </article>
             <article style={styles.article}>
                 <h2>Day 1</h2>
                 <img src={daily} style={styles.img} alt='thermometer icon'/>
             <strong>Temp(F):</strong> <p>{fourData[0]}</p>
            
             </article>

             <article style={styles.article}>

             <h2>Day 2</h2>
             <img src={daily} style={styles.img} alt='thermometer icon'/>
             <strong>Temp(F):</strong> <p>{fourData[1]}</p>
             </article>

             <article style={styles.article}>
             <h2>Day 3</h2>
             <img src={daily} style={styles.img} alt='thermometer icon' />
             <strong>Temp(F):</strong> <p>{fourData[2]}</p>
             </article>

             <article style={styles.article}>
             <h2>Day 4</h2>
             <img src={daily} style={styles.img} alt='thermometer icon'/>
             <strong>Temp(F):</strong> <p>{fourData[3]}</p>
             </article>
             </section>
        </div>
    )
}

export default FourDay
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
      width: '50px',
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