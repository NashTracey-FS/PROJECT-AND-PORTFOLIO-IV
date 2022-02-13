import React from "react";
import {Link} from 'react-router-dom'


const Nav = () =>{
    return(
        <nav style = {styles.nav}>
            <Link to="/home" style={{color: 'black'}}>Home</Link>
            <Link to="/current" style={{color: 'black'}}>Current Conditions</Link>
            <Link to="/four" style={{color: 'black'}}>Four Day</Link>
            <Link to="/astro" style={{color: 'black'}}>Astrological Events</Link>
           
        </nav>
    )
}
export default Nav;

const styles ={
    nav:{
        
        color: '#1B998B',
        width: '25%',
        height: '100%',
        position: 'fixed',
        zIndex: 1,
        top: '93px',
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        
      
    },
   
  



   
}