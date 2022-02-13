import React from 'react';
import {astroData,cityData,fourData,getData} from '../ApiCall'



function Home(){
getData(astroData,cityData,fourData);
console.log(astroData,cityData,fourData);
    return(
        <main>
            <h1>Home</h1>
            <section>
                <h2>About</h2>
            </section>
            <section>
                <h2>Morrow, GA</h2>
                <p>
                Morrow is a city in Clayton County, Georgia, United States. It is part of the Atlanta metropolitan area. It is the home of Clayton State University. The community was named after Radford E. Morrow, the original owner of the town site.
                Morrow was founded in 1846 with the advent of the railroad into the area. It was incorporated as a city in 1943
                Morrow is located north of the center of Clayton County . It is bordered to the north by Lake City and to the northwest by Forest Park. Downtown Atlanta is 13 miles to the north. Interstate 75 passes through the southern part of the city, with access from Exit 233. The Southlake Mall is in the southwest part of the city near I-75.
                 </p>
            </section>
        </main>
    )
}

export default Home