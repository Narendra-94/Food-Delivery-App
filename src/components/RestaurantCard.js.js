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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <p className="restaurant-name">{name}</p>
      <p>{cuisines.join(", ")}</p>
      <div className="restaurant-ratings">
        <span
          className="rating"
          style={
            avgRating < 3.7 || avgRating == "--"
              ? { backgroundColor: "orange" }
              : { backgroundColor: "green" }
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
