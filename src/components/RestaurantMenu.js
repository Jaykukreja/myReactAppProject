import { useEffect, useState } from "react";
import { briyaniList } from "../constants";
import { useParams} from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    // reading dynamic URL params
    const param = useParams();

    const restaurantMenu = useRestaurantMenu(param.id);
    const dispatch = useDispatch();
    const addFoodItem = (item) =>{
        dispatch(addItem(item));
    }

  console.log(restaurantMenu)
    return  restaurantMenu.length === 0? <Shimmer></Shimmer> : (
        <>
        <div className="flex">
        <div className="w-52 p-2 m-2 shadow-2xl bg-pink-100 flex-wrap">
            <h1>Restaurant id: {param.id} </h1>
            <img src={restaurantMenu[0].data.img}></img>
            <h2 className="font-bold">Restaurant Name: {restaurantMenu[0].data.name} </h2>
            <h2>Address: {restaurantMenu[0].data.rating} </h2>
            <h2>Cost: {restaurantMenu[0].data.costForTwo} </h2>
            <h2>Area: {restaurantMenu[0].data.area} </h2>
            <h2>Address: {restaurantMenu[0].data.address} </h2>
        </div>
        <div className="p-1 m-10">
            <h1 className="font-bold text-lg"> Menu </h1>
            <ul className="list-disc">
                {restaurantMenu[0].menuItems.map((item)=><li>{item}- <button className="bg-yellow-100 p-1 m-1" onClick={()=>{
                addFoodItem(item)
            }}> Add </button> </li>)}
            </ul>
        </div>
        </div>
        </>
    );
  };
  
  export default RestaurantMenu;