import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
// import { UseSelector } from "react-redux";
import { useSelector } from "react-redux";

export const title = (
  <img
    className=" h-32 w-32" 
    src="https://thumbs.dreamstime.com/b/biryani-logo-vector-art-illustration-street-food-traditional-culinary-business-mascot-brand-238035019.jpg"
    alt="Foodie"
    width="500"
    height="600"
  />
);

const Header = () => {
  const [isLoggedIn,setLoggedIn] =  useState(false);
  const {user} = useContext(userContext);
  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems)
  return (
    <div className="flex justify-between bg-red-200 shadow-lg" >
      {title}
      <div >
        <ul className="flex py-10">
          <li className="px-2"> <Link to="/">Home</Link> </li>
          <li className="px-2"> <Link to="/about">About Us</Link> </li>
          <li className="px-2"> <Link to="/contact">Contact</Link> </li>
          <li className="px-2"> <Link to="/cart">Cart - {cartItems.length}</Link> </li>
          <li className="px-2"> <Link to="/instamart">Instamart</Link> </li>
        </ul>
      </div>
      <h1 className="font-bold text-red-800 p-10">Hi {user.name} (coming from user context*)</h1>
      {isLoggedIn ? <button classNam="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full" onClick={() => setLoggedIn(false)}> Logout </button> : <button  className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-1 px-1 rounded-full" onClick={() => setLoggedIn(true)}> Login </button>}
    </div>
  );
};

export default Header;
