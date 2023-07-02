// import { useEffect, useState } from "react";
// import { useParams} from "react-router-dom";
// import { briyaniList } from "../constants";

// const RestaurantMenu = () => {

    // // reading dynamic URL params
    // const param = useParams();
    // // useEffect(() => {
    // //     getRestaurantMenu();
    // // });
    // // useEffect(() => {
    // //     // API call
    // //     getRestaurantMenu();
    // //   }, []);

    // const [restaurantMenu, setRestaurantMenu] =  useState([]);
    // function getRestaurantMenu() {
    //     setRestaurantMenu(briyaniList);
    // };
    // getRestaurantMenu();

    // const [allRestaurantList, setAllRestaurantList] = useState([]);
    // const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  
    // useEffect(() => {
    //   // API call
    //   getRestaurants();
    // }, []);
  
    // function getRestaurants() {
//       // fetch API CALL from SWIGGY
//       // const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//       // if (!data.ok) {
//       //     throw new Error(`Error! status: ${data.status}`);
//       //   }
//       // const dataJson = await data.json();
//       // console.log(dataJson);
//       setAllRestaurantList(briyaniList);
//       setfilteredRestaurantList(briyaniList);
//     }

//     console.log(allRestaurantList);
//     return (
//         <>
//         <div  className="menu">
//         <div>
//             <h1>Restaurant id: {param.id} </h1>
//             <img src={restaurantMenu.data.img}></img>
//             <h2>Restaurant Name: {briyaniList[0].data.name} </h2>
//             <h2>Cost: {briyaniList[0].data.costForTwo} </h2>
//             <h2>Area: {briyaniList[0].data.area} </h2>
//             <h2>Address: {briyaniList[0].data.address} </h2>
//         </div>
//         <div>
//             <h1> Menu </h1>
//             <ul>
//                 {briyaniList[0].menuItems.map((item)=><li>{item}</li>)}
//             </ul>
//         </div>
// //         </div>
//         </>
//     )
// }





// export default RestaurantMenu;
import { useEffect, useState } from "react";
import { briyaniList } from "../constants";
import { useParams} from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    // reading dynamic URL params
    const param = useParams();
  
    useEffect(() => {
      // API call
      getRestaurantMenu();
    }, []);
  
    const [restaurantMenu, setRestaurantMenu] =  useState([]);
    function getRestaurantMenu() {
        const resId = param.id;
        const restaurantMenuDetails = getRestaurantMenuDetailsById(resId, briyaniList);
        console.log("jo",restaurantMenuDetails);
        setRestaurantMenu(restaurantMenuDetails);
    };
    

    function getRestaurantMenuDetailsById(resId, briyaniList) {
        const filteredData = briyaniList.filter((resultRestaurant) => {
            if(resultRestaurant.data.id === resId){
                return resultRestaurant;
            }

          });
        return filteredData;
    };

  console.log(restaurantMenu)
    return  restaurantMenu.length === 0? <Shimmer></Shimmer> : (
        <>
        <div className="menu">
        <div>
            <h1>Restaurant id: {param.id} </h1>
            <img src={restaurantMenu[0].data.img}></img>
            <h2>Restaurant Name: {restaurantMenu[0].data.name} </h2>
            <h2>Address: {restaurantMenu[0].data.rating} </h2>
            <h2>Cost: {restaurantMenu[0].data.costForTwo} </h2>
            <h2>Area: {restaurantMenu[0].data.area} </h2>
            <h2>Address: {restaurantMenu[0].data.address} </h2>
        </div>
        <div>
            <h1> Menu </h1>
            <ul>
                {restaurantMenu[0].menuItems.map((item)=><li>{item}</li>)}
            </ul>
        </div>
        </div>
        </>
    );
  };
  
  export default RestaurantMenu;