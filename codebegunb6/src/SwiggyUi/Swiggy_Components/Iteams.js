import React, { useRef } from "react";
import "./Swiggy.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 

const foodItems = [
  { name: "Pizza", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png" },
  { name: "Dosa", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png" },
  { name: "Burger", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png" },
  { name: "Shawarma", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png" },
  { name: "Cake", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" },
  { name: "Noodles", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png" },
  { name: "Paratha", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" },
  { name: "Idli", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png" },
  { name: "Kebab", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png" },
  { name: "Rolls", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" },
  { name: "Salad", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png" },
];

function Iteams() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={scrollLeft}>
        <FaChevronLeft />
      </button>

      <div className="StaticImages" ref={scrollRef}>
        {foodItems.map((item, index) => (
          <div className="gallery" key={index}>
            <button>
              <img src={item.image} alt={`${item.name} Image`} />
            </button>
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <button className="arrow right" onClick={scrollRight}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Iteams;
