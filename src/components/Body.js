import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useRestaurant from "../utils/useRestaurant.js";
import useOnline from "../utils/useOnline.js";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  // empty dependency array => once after render
  // dep arry [searchText] => once after initial render + everytime after redern (my searchText changes)
  const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
    useRestaurant();

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline, please check your internet connection</h1>;
  }

  // not render component (Early return)
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="w-4/5 bg-gray-100 justify-center my-4 mx-auto p-8 flex ">
        <input
          type="text"
          className="w-4/5 border-2 border-solid border-red-500 border-r-0 p-4 text-base sm:text-lg"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="bg-red-500 border-2 border-solid border-red-500 text-white p-4 "
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="bg-gray-100 m-0 w-full md:m-auto md:w-4/5 flex flex-wrap gap-6 justify-center">
        <p className="w-4/5 mx-auto my-auto bg-gray-100 text-2xl p-2">
          {filteredRestaurants.length} restaurants.
        </p>
        {filteredRestaurants.length === 0 ? (
          <p className="text-center w-full text-3xl">No Restaurant Found</p>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <>
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <div className="border-transparent h-full hover:shadow-md hover:shadow-gray-400 transition duration-0 hover:duration-450">
                    <RestaurantCard {...restaurant.data} />
                  </div>
                </Link>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
