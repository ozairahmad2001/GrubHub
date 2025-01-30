import { IMG_CDN_URL } from "../config";
import { restaurantList } from "../config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={restaurantList[0].info?.name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;