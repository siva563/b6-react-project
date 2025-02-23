import React from "react";
import Banner1 from "../Images/Banner1.jpg";
import Banner3 from "../Images/Banner3.avif";
import Banner2 from "../Images/Banner2.jpg";
import Banner4 from "../Images/Banner4.avif";
import Banner5 from "../Images/Banner5.avif";
import Banner6 from "../Images/Banner6.avif";
import Banner7 from "../Images/Banner7.avif";
import Banner9 from "../Images/Banner9.avif";
import Banner8 from "../Images/Banner8.avif";
import Banner10 from "../Images/Banner10.avif";
import Banner11 from "../Images/Banner11.avif";
import Banner12 from "../Images/Banner12.avif";
import Banner13 from "../Images/Banner13.avif"
import Banner14 from "../Images/Banner14.avif";
import Banner15 from "../Images/Banner15.avif";
import Banner16 from "../Images/Banner16.avif";
import Banner17 from "../Images/Banner17.avif";
import Banner18 from "../Images/Banner18.avif";
import Banner19 from "../Images/Banner19.webp";
import Banner20 from "../Images/Banner20.jpg";
import Banner21 from "../Images/Banner21.avif";
import Banner22 from "../Images/Banner22.webp";

function Banner() {
  return (
    <div className="w-full">
      <div>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Banner21} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Banner20} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Banner19} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>


      <img src={Banner1} className="w-full h-auto mt-4" alt="Banner1" />
      <img src={Banner3} className="w-full h-auto mt-4" alt="Banner3" />
      <img src={Banner2} className="w-full h-auto mt-4" alt="Banner2" />
      <img src={Banner4} className="w-full h-auto mt-4" alt="Banner4" />
      <img src={Banner5} className="w-full h-auto mt-4" alt="Banner5" />
      <img src={Banner6} className="w-full h-auto mt-4" alt="Banner6" />
      <img src={Banner7} className="w-full h-auto mt-4" alt="Banner7" />
      <img src={Banner9} className="w-full h-auto mt-4" alt="Banner9" />
      <img src={Banner8} className="w-full h-auto mt-4" alt="Banner8" />

      <div class="card-group">
  <div class="card">
    <img src={Banner10} class="card-img-top" alt="Banner10"/>
    <div class="card-body">
    </div>
  </div>
  <div class="card">
    <img src={Banner11} class="card-img-top" alt="Banner11"/>
    <div class="card-body">
    </div>
  </div>
  <div class="card">
    <img src={Banner12} class="card-img-top" alt="Banner12"/>
    <div class="card-body">
    </div>
  </div>
</div>
<div class="card-group">
  <div class="card">
    <img src={Banner13} class="card-img-top" alt="Banner13"/>
    <div class="card-body">
    </div>
  </div>
  <div class="card">
    <img src={Banner14} class="card-img-top" alt="Banner14"/>
    <div class="card-body">
    </div>
  </div>
  <div class="card">
    <img src={Banner15} class="card-img-top" alt="Banner15"/>
    <div class="card-body">
    </div>
  </div>
  <div class="card">
    <img src={Banner16} class="card-img-top" alt="Banner16"/>
    <div class="card-body">
    </div>
  </div>
  <div class="card">
    <img src={Banner17} class="card-img-top" alt="Banner17"/>
    <div class="card-body">
    </div>
  </div>
  <div class="card">
    <img src={Banner18} class="card-img-top" alt="Banner18"/>
    <div class="card-body">
    </div>
  </div>
</div>
<img src={Banner22} className="w-full h-auto mt-4" alt="Banner1" />
<footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        
        {/* Online Shopping Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-3">ONLINE SHOPPING</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-3">USEFUL LINKS</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>Cleartrip</li>
          </ul>
        </div>

        {/* Customer Policies Section */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-3">CUSTOMER POLICIES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy policy</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>

        {/* Experience Myntra App & Keep in Touch */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
          <h3 className="text-lg font-semibold mb-3">EXPERIENCE MYNTRA APP ON MOBILE</h3>
          <p className="text-gray-300">Download the app for better experience</p>

          <h3 className="text-lg font-semibold mt-4 mb-3">KEEP IN TOUCH</h3>
          <p className="text-gray-300">Follow us on social media</p>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        <p>100% ORIGINAL guarantee for all products at myntra.com</p>
        <p>Return within 14 days of receiving your order</p>
      </div>
    </footer>






    </div>

  );
}

export default Banner;
