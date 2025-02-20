import { IMG_CDN_URL } from "../config";
import { restaurantList } from "../config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="w-56 h-auto p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt={restaurantList[0].info?.name}
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;