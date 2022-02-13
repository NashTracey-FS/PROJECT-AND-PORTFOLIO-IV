import React from 'react';
import {astroData,cityData,fourData,getData} from '../ApiCall'



function FourDay(){
   
  getData();

    return(
        <section>
             <h1>Four Day forecast</h1>
             <div>
                 <h2>Day 1</h2>
             <strong>Temp:</strong> <p>{fourData[0]}</p>
            
             </div>

             <div>
             <h2>Day 2</h2>
             <strong>Temp:</strong> <p>{fourData[1]}</p>
             </div>

             <div>
             <h2>Day 3</h2>
             <strong>Temp:</strong> <p>{fourData[2]}</p>
             </div>

             <div>
             <h2>Day 4</h2>
             <strong>Temp:</strong> <p>{fourData[3]}</p>
             </div>
             </section>
    )
}

export default FourDay

