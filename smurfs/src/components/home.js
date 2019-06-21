import React from 'react';
import {Link} from 'react-router-dom';
import img from '../assets/images/SV_header.jpg'
import '../index.css';



const Home = () =>{
    return (
        <div className="home-body">
            <img className="landing-img" src={img} alt="smurf home" />
            <div className="header">
                <Link to={'/smurfs'}>Enter Smurfs Village</Link>
            </div>
        </div>
    )
}


export default Home;