import { IMG_CDN_URL } from "../config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwoString,
}) => {
  return (
    <div className="p-4 md:w-[19rem] ">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <p className="pt-3 text-lg font-bold  ">{name}</p>
      <p className="text-lg text-gray-900 py-3">{cuisines.join(", ")}</p>
      <div className="flex justify-between font-bold">
        <span
          className={
            (avgRating < 3.7 || avgRating == "--"
              ? "bg-orange-500"
              : "bg-green-500") +
            " " +
            "px-2 text-white"
          }
        >
          <FontAwesomeIcon icon={faStar} size="sm" /> {avgRating}
        </span>
        <span>{lastMileTravelString}</span>
        <span>{costForTwoString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
