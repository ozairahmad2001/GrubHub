import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurant, menuItems } = useRestaurant(resId);

  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
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
