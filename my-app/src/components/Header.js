import React from 'react';
import logo from '../components/images/logo.png';
import {Link} from 'react-router-dom'




const Header=()=>{
    return(
        <header>
         <div style={styles.header}>
         <Link to="/home" style={{color: '#020887'}}>Home</Link>
         <Link to="/current" style={{color: '#020887'}}>Current Conditions</Link>
        <img style ={styles.logo} src={logo} alt="Logo" />
        <Link to="/four" style={{color: '#020887'}}>Four Day</Link>
        <Link to="/astro" style={{color: '#020887'}}>Astrological Events</Link>
        </div>
        
      
        </header>
    )
}
export default Header

const styles ={
    
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBotom: 10,
        },
    logo:{
        borderRadius: '50%',
        height: '50px',
        width: '60px',
        
    },
    center:{
        
    },
    searchContainer:{
        border: '1px solid #eefc57',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor:'gray'
 
    },
    inputIcon:{
    
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem'
    },
    input:{
        border: '1px solid #eefc57',
        borderRadius: '10%',
        flex: 1,
        width: '70%',
        padding: '10px',
        backgroundColor: 'black',
        color: 'white'
 
    },
    rtNav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '2%',
        justifyContent: 'space-between'
 
    },
    h1: {
     display: 'flex',
     flexDirection: 'row',
     alignItems: 'center',
     fontSize: '1rem',
     color: '#5fbff9'
 
    },
    button:{
        display: 'flex',
        fontSize: '14px'
    }

 }