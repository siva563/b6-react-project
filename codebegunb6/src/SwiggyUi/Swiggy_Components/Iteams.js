import React, { useRef } from "react";
import "./Swiggy.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons for arrows

const foodItems = [
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Kebab.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png" },
  { image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png" },
];

function Iteams() {
  const scrollRef = useRef(null);

  // Function to scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  // Function to scroll right
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
