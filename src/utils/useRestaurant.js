import { useEffect, useState } from "react";
import { RESTAURANT_LIST_URL } from "../config";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTAURANT_LIST_URL);
    const json = await data.json();

    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurant;
