import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_content">
        <div className="About">
          <h1>About</h1>
          <p>
            Welcome to our ecommerce website, where you can discover a world of
            amazing products and exceptional shopping experiences. Our about
            section aims to give you a glimpse into our company and what sets us
            apart.
          </p>
        </div>
        <div className="Contact">
          <h1>Contact</h1>
          <div className="Contact_content">
            <span className="icons">
              <FaLocationArrow />
            </span>
            <p>251 Janiper Block, Bahria Town, Lahore</p>
          </div>
          <div className="Contact_content">
            <span className="icons">
              <FaMobileAlt />
            </span>
            <p>+92 318 4111 969</p>
          </div>
          <div className="Contact_content">
            <span className="icons">
              <FaEnvelope />
            </span>
            <p>nasirnabeel36@gmail.com</p>
          </div>
        </div>
        <div className="Categories">
          <h1>Categories</h1>
          <ul>
            <li>Headphones</li>
            <li>Smartwatches</li>
            <li>Bluetooth Speakers</li>
            <li>Projectors</li>
            <li>Wireless Earbuds</li>
            {/* <li>Home Theator</li> */}
          </ul>
        </div>
        <div className="Pages">
          <h1>Pages</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Privacy Policy</li>
            {/* <li>Return Items</li> */}
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="Bottom_footer">
        <div className="bottom_content">
            <div className="text_bottom">Developed and designed by CODSEED</div>
            <img src={Payment} className="bottomImg" alt=""/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
