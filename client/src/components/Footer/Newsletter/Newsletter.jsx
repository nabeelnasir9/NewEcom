import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
  return (
    <div className="NewsLetterSection">
      <div className="NewsLetter_content">
        <span className="smallText">News letter</span>
        <span className="bigText">SignUp for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="nasirnabeel36@gmail.com" />
          <button className="button">Subscribe</button>
        </div>
        <div className="text">Will be used in accordance with our Privacy & Policy</div>
        <div className="socialIcons">
            <div className="icon1">
                <FaFacebookF size={18}/>
            </div>
            <div className="icon2">
                <FaTwitter size={18}/>
            </div>
            <div className="icon3">
                <FaLinkedinIn size={18}/>
            </div>
            <div className="icon4">
                <FaInstagram size={18}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
