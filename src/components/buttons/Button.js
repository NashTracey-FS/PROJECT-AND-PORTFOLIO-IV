import React from 'react';

const Button= props =>{
    return(
        <button style={styles.btnStyle}>
            {props.btnText}
        </button>
    )
}
export default Button

const styles = {
    btnStyle: {
        border: '2px solid #020887',
        backgroundColor: '#1B998B',
        color: '#FBF5F3',
        fontWeight: 'bold',
        borderRadius: '10%',
        padding: '1%',
        margin: '1%',
        cursor: 'pointer',
        boxShadow:'0 3px 6px 0 rgba(0, 0, 0.20)'
    },
}
