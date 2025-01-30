import React, { useState } from 'react';
import './Card.css';

function Card() {
    const [name, setName] = useState('Naruto Uzumaki');

    return (
        <div className="Card">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://i.pinimg.com/736x/82/69/3e/82693ee38e59d0858d7aff9c721a5644.jpg" alt="Naruto Uzumaki" />
                </div>
                <div className="social-icons">
                    <ul>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-instagram" />
                    </a></li>
                    <li> <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook" />
                    </a></li>
                   <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter" />
                    </a></li></ul>
                </div>
            </div>
            <div className="lower-container">
                <h2>{name}</h2>
                <p>"Believe it! I'm going to be Hokage!"</p>
                <button className="follow-btn" ><a href='https://youtu.be/GGgmXTlvuJs?si=U1Nn9EKfUPGfOkK7'>Follow</a></button>
                <button className="about-btn"><a href='https://naruto.fandom.com/wiki/Naruto_Uzumaki'>About</a></button>
            </div>
        </div>
    );
}

export default Card;
