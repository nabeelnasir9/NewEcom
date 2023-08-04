import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { context } from "../../utils/context";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);
    if (offset >= 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [isSticky]);

  return (
    <header className={`Main_Header ${isSticky ? "sticky_Header" : ""}`}>
      <div className="Header_content">
        <ul className="left">
          <li><Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link></li>
          <li><Link to='/category/:id' style={{textDecoration:'none', color:'white'}}>About</Link></li>
          <li><Link to='/product/:id' style={{textDecoration:'none', color:'white'}}>Categories</Link></li>
        </ul>
        <div className="center">Aznik Impex</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cartIcon">
            <CgShoppingCart />
            <span>5</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
