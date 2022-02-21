import React from 'react';
import {astroData,cityData,fourData,getData} from '../ApiCall'



function Home(){
getData(astroData,cityData,fourData);
console.log(astroData,cityData,fourData);
    return(
        <main style={styles.main}>
            
            <div style={styles.left}>
            

                <h2>Welcome to Clearskies! Here you can track weather data for the city of Morrow.</h2>

            
            </div>
            <div style={styles.right}>
            
                <h2>Morrow, GA</h2>
                <p>
                Morrow is a city in Clayton County, Georgia, United States. It is part of the Atlanta metropolitan area. It is the home of Clayton State University. The community was named after Radford E. Morrow, the original owner of the town site.
                Morrow was founded in 1846 with the advent of the railroad into the area. It was incorporated as a city in 1943
                Morrow is located north of the center of Clayton County . It is bordered to the north by Lake City and to the northwest by Forest Park. Downtown Atlanta is 13 miles to the north. Interstate 75 passes through the southern part of the city, with access from Exit 233. The Southlake Mall is in the southwest part of the city near I-75.
                 </p>
            
            </div>
        </main>
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
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBotom: 10,
    },
    right:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '2%',
        justifyContent: 'space-between'
    },
    left:{
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'left',
        
    }
}
