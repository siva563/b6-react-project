import React from "react";
import "./Swiggy.css";


function Navbar(){
    return(
      <div className="NavbarSection">
        <div className="companyTitle">
            <h2>CLONE</h2>
        </div>
        <div className="searchBar">
            <input type="text" placeholder="Search..." />
        </div>
        <div className="userAuth">
            Login/SignUp
        </div>
      </div>

    )
}

export default Navbar; 