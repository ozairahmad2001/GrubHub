import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5482377&lng=77.2983373&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json.data?.cards[2]?.card?.card?.info);

    setMenuItems(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return (
    <div className="restaurant-menu">
      <div>
        <h1>{restaurant?.name}</h1>
        <h1>Restaurant id : {resId}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h2>{restaurant?.avgRating} stars</h2>
        <h3>{restaurant?.costForTwoMessage}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.areaName}</h3>
      </div>
      <div className="menu-section">
        <h1>Menu</h1>
        <div>
          {menuItems?.map((item) => {
            return (
              <div key={item?.card?.info?.id}>
                <h3>{item?.card?.info?.name}</h3>
                <div>{item?.card?.info?.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
