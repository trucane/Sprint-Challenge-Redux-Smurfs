import React from 'react';
import img from '../assets/images/SV_header.jpg'
import '../index.css';



const Home = () =>{
    return (
        <div className="home-body">
            <img className="landing-img" src={img} alt="smurf home" />
        </div>
    )
}


export default Home;