import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { MENU_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Accordion from "./Accordion";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    areaName,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
    cuisines,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;
  {
    /**const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;  askhay saini wrote it*/
  }

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  
  let iconStyle = { color: "white", fontSize: "1em" };

  return (
    <div className="relative justify-center mb-10">
      <div className="text-center ">
        <h1 className="font-black font-Nunito text-2xl p-2 m-6">{name}</h1>
      </div>
      <div className="w-[52%] h-[190px]  absolute left-1/2 transform -translate-x-1/2 rounded-3xl z-10  bg-gradient-to-t from-gray-100 "></div>
      <div className="w-[50%] border border-b-2 absolute left-1/2 transform -translate-x-1/2 p-4 shadow-2xl rounded-3xl z-20">
        <div className="relative flex mt-2">
          <div className="relative flex bg-[#267E3E] w-14 border rounded-lg items-center justify-center">
            <span className="pr-1">
              <MdOutlineStarPurple500 style={iconStyle} />
            </span>
            <span className="pr-1 text-white font-semibold">
              {avgRatingString}
            </span>
          </div>
          <span className="px-2 font-bold">
            {"("}
            {totalRatingsString}
            {")"}
          </span>
          <span className="flex items-center">
            <GoDotFill style={{ color: "gray", fontSize: "0.5em" }} />
          </span>
          <h2 className="px-2 font-bold">{costForTwoMessage}</h2>
        </div>
        <h2 className="px-2 py-2 text-sm font-Fira font-bold text-orange-600 underline">
          {cuisines.join(", ")}
        </h2>
        <div className="flex m-2">
          <h2 className="pr-4 text-sm font-Fira font-bold">Outlet</h2>
          <h2 className="text-sm font-Fira text-zinc-600">{areaName}</h2>
        </div>
        <h2 className="text-sm font-Fira font-bold m-2">{sla.slaString}</h2>
      </div>
      <div className="grid place-items-center mt-64">
          {categories.map((category) => (
            <Accordion key = {category?.card?.card.title} data={category?.card?.card} />
          ))}
        </div>
    </div>
  );
};

export default RestaurantMenu;
