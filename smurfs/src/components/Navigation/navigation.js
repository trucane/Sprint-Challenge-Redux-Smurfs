import React from "react";
import {Link} from 'react-router-dom';


const Navigation = () =>{
    return(
        <nav>
            <div><Link to={'/'} >Home</Link></div>
            <div><Link to={'/smurfs'} >Smurfs Village</Link></div>
            <div><Link to={'/add'} >Add Smurf</Link></div>
        </nav>
    )
}

export default Navigation;