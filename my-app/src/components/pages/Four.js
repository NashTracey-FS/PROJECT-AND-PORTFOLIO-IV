import React from 'react';
import {astroData,cityData,fourData,getData} from '../ApiCall'



function FourDay(){
    getData(fourData);
    console.log(fourData);
    return(
        <section style={styles.main}>
             <h1>Four Day Forecast</h1>
             <div>
                 <h2>Day 1</h2>
             <strong>Temp(F):</strong> <p>{fourData[0]}</p>
            
             </div>

             <div>
             <h2>Day 2</h2>
             <strong>Temp(F):</strong> <p>{fourData[1]}</p>
             </div>

             <div>
             <h2>Day 3</h2>
             <strong>Temp(F):</strong> <p>{fourData[2]}</p>
             </div>

             <div>
             <h2>Day 4</h2>
             <strong>Temp(F):</strong> <p>{fourData[3]}</p>
             </div>
             </section>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
       
    },
}
