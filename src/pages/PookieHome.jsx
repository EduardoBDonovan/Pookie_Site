import React from "react";
import "../styles/PookieHome.css";
import { FaHeart } from "react-icons/fa";

function PookieHome() {
  const imageModules = import.meta.glob("../images/*.{png,jpg,jpeg,svg}", {
    eager: true,
  });

  // Create an array of image URLs
  const images = Object.values(imageModules).map((mod) => mod.default);
  return (
    <div className="pookiePage">
      <div className="pageHeader">
        <FaHeart />
        <h1>
          Happy Valentines Day! <br />I love you Nugget!
        </h1>
        <FaHeart />
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default PookieHome;
