import { IMG_CDN_URL } from "../config";
import { restaurantList } from "../config";

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="w-56 h-auto p-2 m-2 shadow-lg bg-pink-50">
      <img
        src={IMG_CDN_URL + imageId}
        alt={restaurantList[0].info?.name}
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rupees {price/100} </h4>
    </div>
  );
};

export default FoodItem;;