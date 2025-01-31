import React from "react";
import './Graph.css';
import { Home, Layout, Package, FileText, FormInput, Image } from "lucide-react";

const Graph = () => {
  return (
    <div className="outer-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Navigation Links */}
          <div className="nav-links">
            <a href="/home"><Home size={18} /> Home</a>
            <a href="/interface"><Layout size={18} /> Interface</a>
            <a href="/components"><Package size={18} /> Components</a>
            <a href="/pages"><FileText size={18} /> Pages</a>
            <a href="/forms"><FormInput size={18} /> Forms</a>
            <a href="/gallery"><Image size={18} /> Gallery</a>
          </div>
        </div>
      </nav>

      {/* Box Section (First row of 6 boxes) */}
      <div className="box-container">
        <div className="box">1</div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box">6</div>
      </div>

      {/* Box Section (Second row with two large boxes below 1-3 and 4-6) */}
      <div className="box-container">
        {/* Box 7 with an image */}
        <div className="big-box">
          <img src="Graph.jpg" alt="Box 7" className="box-image" />
        </div>

        {/* Box 8 is now divided into two equal parts */}
        <div className="big-box-container">
          <div className="small-box">
            <img src="Piechart.jpg" alt="Box 8.1" className="box-image" />
          </div>
          <div className="small-box">
            <img src="Piechart.jpg" alt="Box 8.2" className="box-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
