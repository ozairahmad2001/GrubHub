import { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restaurant, menuItems } = useRestaurant(resId);
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("Grapes"));
  };
  const addFoodItem = (item) => {
    dispatch(addItem(item?.card?.info));
  }

  return menuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex ">
      <div>
        <h1 className="font-bold text-2xl text-red-900">{restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h2>{restaurant?.avgRating} stars</h2>
        <h3>{restaurant?.costForTwoMessage}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.areaName}</h3>
      </div>
      
      <div className="menu-section">
        <h1 className="font-bold text-xl">Menu</h1>
        <div>
          {menuItems?.map((item) => {
            return (
              <div key={item?.card?.info?.id}>
                <h3>{item?.card?.info?.name} -  <button className="p-1 bg-green-50 boder border-1 rounded-md" onClick={()=>addFoodItem(item)}>Add</button></h3>
                <div>{item?.card?.info?.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
export default RestaurantMenu;
