import React from 'react';
import logo from '../components/images/logo.png';
import {Link} from 'react-router-dom'




const Header=()=>{
    return(
        <header>
         <div style={styles.header}>
         <Link to="/home" style={styles.btnStyle}>Home</Link>
         <Link to="/current" style={styles.btnStyle}>Current Conditions</Link>
        <Link to ="/home"><img style ={styles.logo} src={logo} alt="Logo" /></Link>
        <Link to="/four" style={styles.btnStyle}>Four Day</Link>
        <Link to="/astro"style={styles.btnStyle}>Astrological Events</Link>
        </div>
        
      
        </header>
    )
}
export default Header

const styles ={
    
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
    btnStyle: {
            color: '#1B998B',
            fontWeight: 'bold',
            borderRadius: '10%',
            padding: '1%',
            margin: '1%',
            cursor: 'pointer',
            textDecoration: 'none',
            
           
        },
      }

 