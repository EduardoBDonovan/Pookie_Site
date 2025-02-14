import React from "react";
import "../styles/PookieHome.css";
import { FaHeart } from "react-icons/fa";

function PookieHome() {
  return (
    <div className="pookiePage">
      <div className="pageHeader">
        <FaHeart />
        <i className="fa-solid fa-heart"></i>
        <h1>
          Happy Valentines Day! <br />I love you Nugget!
        </h1>
        <FaHeart />
      </div>
      <div className="image-gallery"></div>
    </div>
  );
}

export default PookieHome;
