import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurant(resId);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div className="bg-[#3C4852] text-white py-8 mb-5">
      <div>
        <div className="m-auto w-4/5 flex justify-evenly items-center gap-5">
          <h1>Menu:{resId}</h1>
          <h2>Restaurant name: {restaurantMenu.name}</h2>
          <img src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId} />
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {Object.values(restaurantMenu?.menu?.items).map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
