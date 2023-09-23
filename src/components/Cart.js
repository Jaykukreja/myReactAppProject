import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch()
  console.log(cartItems);
  const handleClick = ()=> {
    dispatch(clearCart())
  }
  return (
    <>
      <div>
        <h1 className="font-bold text-red-700 p-2 m-2">
          This is a Cart Component
        </h1>
        <button className= "bg-green-200 p-2 m-2"onClick={handleClick}>Clear Cart</button>
        <h2 className="font-semibold text-black p-2 m-2">
          Total Items in your cart - {cartItems.length}{" "}
        </h2>
        <div className="p-1 m-10">
          <ul className="list-disc">
            {cartItems.map((item) => (
              <li>{item} </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cart;
