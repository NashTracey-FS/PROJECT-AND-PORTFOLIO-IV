import React from "react";
import {Link} from 'react-router-dom';

const Nav = () =>{
    return(
        <nav style = {styles.nav}>
            <Link to="/home" style={{color: '#020887'}}>Home</Link>
            <Link to="/current" style={{color: '#020887'}}>Current</Link>
            <Link to="/fourDay" style={{color: '#020887'}}>Four Day</Link>
            <Link to="/astroEvents" style={{color: '#020887'}}>Astrological Events</Link>
            
        </nav>
    )
}
export default Nav;

const styles ={
    nav:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        width: '250px',
        padding: '1%',
        backgroundColor:'#FBF5F3',
        color: '#020887',
        boxShadow:'0 3px 6px 0 rgba(0, 0, 0.30)',
        textAlign:'center',
    },
    selected:{
        color:'#1B998B'
    }
   
}
