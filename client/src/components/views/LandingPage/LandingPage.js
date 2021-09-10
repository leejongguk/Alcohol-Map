import React from 'react'
import firebaseInit from '../../../firebaseInit';
import logo from '../../../logo1.png';
import './LandingPage.css';


export default function LandingPage() {
    return (
        <div style={{ textAlign: 'center',backgroundColor:'#282c34' }}>
            <header style = {{ display:'flex', flexDirection: 'column', alignItems: 'center',  backgroundColor:'#282c34',minHeight: '100vh', justifyContent: 'center' ,maxWidth: '800px', maxHeight: '900px',color:'white', fontSize:'cal(10px+2vmin', margin: "auto"}}>
                <a href = "/map">
                    <img src={logo} alt="logo"  />
                </a>    
                <p>Hello Alcohol-Map</p>
            </header>
        </div>
    );
}


