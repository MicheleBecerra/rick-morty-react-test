import React from "react";
import { Link } from "react-router-dom";
import { EARTH,
    CITADEL,
    MONSTER
 } from "./../constants/locations";


const GetByLocationName = location => {
    switch (location) {
        case EARTH:           
            return "Earth";
        case CITADEL:           
            return " Citadel of Ricks ";
        case MONSTER:           
            return "Testicle Monster Dimension";  
        default:
            return " Try another location";
    }
}


const GetByLocation = location => {
    return ( GetByLocationName(location))
}

const Location = ({ id, location }) => (

<div> 
<Link to = "/newlocation" ><h3> And you can find episodes also by Location </h3></Link>
    
    <span>{`${id}`}</span>
    <br />

        { GetByLocation(location) }

</div>

);

export default Location;