import React from "react";
import "../Swiggy_Components/Swiggy.css";
import Navbar from "../Swiggy_Components/Navbar";
import Iteams from "../Swiggy_Components/Iteams";
import Firms from "../Swiggy_Components/Firms";


function ClonePages(){
    return(
    <div>
        <Navbar/>
        <div className="landing">
        <Iteams />
        <Firms />
        </div>
        
        
               
    </div>
    )
}

export default ClonePages; 