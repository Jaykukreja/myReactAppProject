import { useEffect, useState } from "react";
import { briyaniList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurantList) {
  const filteredData = restaurantList.filter((resultRestaurant) => {
    return resultRestaurant.data.name.toString().includes(searchText);
  });
  return filteredData;
}
const Body = () => {
  const [searchText, setSearchText] = useState("KFC");
  const [allRestaurantList, setAllRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  function getRestaurants() {
    // fetch API CALL from SWIGGY
    // const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    // if (!data.ok) {
    //     throw new Error(`Error! status: ${data.status}`);
    //   }
    // const dataJson = await data.json();
    // console.log(dataJson);
    setAllRestaurantList(briyaniList);
    setfilteredRestaurantList(briyaniList);
  }

  return allRestaurantList.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const resultRestaurantData = filterData(
              searchText,
              allRestaurantList
            );
            setfilteredRestaurantList(resultRestaurantData);
          }}
        >
          Search
        </button>
      </div>
      <div className="rest-list">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id} >
              <RestaurantCard {...restaurant.data}></RestaurantCard>
            </Link>
          );
        })}
        {/* <RestaurantCard {...briyaniList[0].data} ></RestaurantCard> */}
        {/* <RestaurantCard restaurant = {briyani[1]} ></RestaurantCard>
    <RestaurantCard restaurant = {briyani[2]} ></RestaurantCard>

    <RestaurantCard restaurant = {briyani[3]} ></RestaurantCard>

    <RestaurantCard restaurant = {briyani[4]} ></RestaurantCard> */}
      </div>
    </>
  );
};

export default Body;
