import { useEffect, useState } from "react";
import { briyaniList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
// data = [
//   {
//     nodeName: "node1",
//     children: [
//       { nodeName: "child1", children: [{ nodename: "grandCHild1" }] },
//       { nodeName: "child2", children: [{ nodename: "grandCHild1" }] },
//     ],
//   },
// ];


// result = [];
// function getNodes(data) {
//   data.map((item) => {
//     if (!item.nodeName) {
//       return;
//     } else {
//       result.push(item.nodeName);
//     }

//     // if (item.children) {
//     //   getNodes(item.children);
//     // }
//   });
// }
function filterData(searchText, restaurantList) {
  const filteredData = restaurantList.filter((resultRestaurant) => {
    return resultRestaurant.data.name.toString().includes(searchText);
  });
  return filteredData;
}
const Body = () => {
  const [searchText, setSearchText] = useState("");
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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Please check your internet connection</h1>;
  }

  return allRestaurantList.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="search-container p-1 bg-red-100 shadow-lg my-3">
        <input
          type="text"
          className="hover:bg-pink-100 border-spacing-0 p-1"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="p-2 m-2 bg-purple-300 hover:bg-purple-400 rounded-md"
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
      <div className=" flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
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
