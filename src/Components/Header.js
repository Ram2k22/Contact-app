import React from 'react';

const Header = () => {
    return (
        <div className = "ui menu center" style={{height:100,textAlign:'center',background:'linear-gradient(#947390,#874373)'}}>
            <div className = "ui container" style={{boxShadow:'2px 2px 3px 2px',borderRadius:'10px'}}>
                <h1 style={{textAlign:'center',marginLeft:'42%',marginTop:'20px',color:'white'}}>Contact Manager</h1>
            </div>
        </div>
    )
}

export default Header