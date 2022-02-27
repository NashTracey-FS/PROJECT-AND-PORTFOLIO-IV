import React from 'react';
import {astroData,cityData,fourData,getData} from '../ApiCall'
import cityHall from '../images/cityhall.jpeg';
import marker from '../images/Marker.jpeg';

function Home(){
getData(astroData,cityData,fourData);
console.log(astroData,cityData,fourData);
    return(
        <div>
                <h2 style={styles.h2}>Home</h2>
        <main style={styles.main}>
             <section style={styles.left}>
            

                <h2 style={styles.h3}>Welcome to ClearSkies!</h2>
                
                <p> Here you can track weather data for the city of Morrow.</p>

            
            </section>
            <section style={styles.right}>
            
                <h3>Morrow, GA</h3>
                <img src={marker} style={styles.img} alt="Waymark for Morrow,GA"/>
                <p>
                Morrow is a city in Clayton County, Georgia, United States. It is part of the Atlanta metropolitan area. It is the home of Clayton State University. The community was named after Radford E. Morrow, the original owner of the town site.
                Morrow was founded in 1846 with the advent of the railroad into the area. It was incorporated as a city in 1943
                Morrow is located north of the center of Clayton County . It is bordered to the north by Lake City and to the northwest by Forest Park. Downtown Atlanta is 13 miles to the north. Interstate 75 passes through the southern part of the city, with access from Exit 233. The Southlake Mall is in the southwest part of the city near I-75.
                 </p>
              
                 
            </section>
        
        </main>
        </div>
    )
}

export default Home

const styles = {
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
        height: '75vh',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBotom: 10,
    },
    left:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '5%',
        marginLeft: '2%',
        justifyContent: 'space-evenly'
    },
    right:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        margin: 'auto',
        width: '50%',
        justifyContent: 'space-evenly',
       
    },
    img:{
        height: '250px',
        width: '250px',
        boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)',
        margin: 'auto'

    },
    h2:{
        color:' #020887',
        border: '2px solid #1B998B',
        boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)',
        margin: 'auto',
        width: '50%'
    },
    h3:{
        color:'#1B998B',
        backgroundColor: '#FBF5F3',
        border: '2px solid #020887 ',
        boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)',
        margin: 'auto',
        width: '50%'
    }
}
