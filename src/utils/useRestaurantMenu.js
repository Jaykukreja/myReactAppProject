import { useEffect, useState } from "react";
import { briyaniList } from "../constants";
const useRestaurantMenu = (resId) => {
  useEffect(() => {
    // API call
    getRestaurantMenu();
  }, []);

  const [restaurantMenu, setRestaurantMenu] = useState([]);
  function getRestaurantMenu() {
    const restaurantMenuDetails = getRestaurantMenuDetailsById(
      resId,
      briyaniList
    );
    console.log("jo", restaurantMenuDetails);
    setRestaurantMenu(restaurantMenuDetails);
  }

  function getRestaurantMenuDetailsById(resId, briyaniList) {
    const filteredData = briyaniList.filter((resultRestaurant) => {
      if (resultRestaurant.data.id === resId) {
        return resultRestaurant;
      }
    });
    return filteredData;
  }

  return restaurantMenu;
};

export default useRestaurantMenu;
