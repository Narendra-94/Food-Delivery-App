import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurantMenu(json.data);
  }
  return restaurantMenu;
  //return resturant data
};

export default useRestaurantMenu;
