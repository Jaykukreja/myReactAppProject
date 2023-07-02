import { useState } from "react";
import { Link } from "react-router-dom";

export const title = (
  <img
    className="logo"
    src="https://yt3.googleusercontent.com/ytc/AGIKgqN2mSr-5HfhYdQLSj_KYpgpxy8hijd8PZbRmkW5=s900-c-k-c0x00ffffff-no-rj"
    alt="Foodie"
    width="500"
    height="600"
  />
);

const Header = () => {
  const [isLoggedIn,setLoggedIn] =  useState(false);
  return (
    <div className="header">
      {title}
      <div className="nav-items">
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About Us</Link> </li>
          <li> <Link to="/contact">Contact</Link> </li>
          <li> <Link to="/cart">Cart</Link> </li>
        </ul>
      </div>
      {isLoggedIn ? <button onClick={() => setLoggedIn(false)}> Logout </button> : <button onClick={() => setLoggedIn(true)}> Login </button>}
    </div>
  );
};

export default Header;
