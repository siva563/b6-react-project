import React from "react";
import "./Basha.css";

function Designtask() {
  return (
    <div className="card-wrapper">
      <div className="card-container">
    
        {[ 
          { name: "Person 1", img: "/IMG-1.jpg"},
          { name: "Person 2", img: "/IMG-2.jpg" },
          { name: "Person 3", img: "/IMG-3.jpg" }
        ].map((person, index) => (
          <div key={index} className="card">
          
            <img src={person.img} alt={person.name} className="card-image" />

           
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

       
            <div className="card-body">
              <h5 className="card-title">Superkid</h5>
              <p className="card-text">I am a Superkid</p>
              <p className="rating">★★★★★</p>
              <div className="button-group">
                <button className="btn btn-primary">About Me</button>
                <button className="btn btn-success">Hire Me</button>
              </div>
            </div>
          </div>
        ))}
      </div>

   
      <div className="text-box">
        SLIDING CARD HTML CSS & JAVASCRIPT
      </div>
    </div>
  );
}

export default Designtask;
