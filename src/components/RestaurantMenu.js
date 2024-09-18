import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { MENU_IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo===null) return(<Shimmer/>);
   
   const{name,areaName,avgRatingString,costForTwoMessage,totalRatingsString,cuisines,sla} = resInfo?.cards[2]?.card?.card?.info;
   {/**const{itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;  askhay saini wrote it*/}

    const cards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards??[];

    let index = null;

    for (let i = 0; i < cards.length; i++) {
        if (cards[i]?.card?.card?.itemCards) {
            index = i;
            break; 
        }
    }
    const itemCards = index!=null ? cards[index]?.card.card.itemCards : undefined;

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h2>{areaName}</h2>
            <h2>{avgRatingString}</h2>
            <h2>{costForTwoMessage}</h2>
            <h2>{totalRatingsString}</h2>
            <h2>{sla.slaString}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <ul>
                {itemCards.map((item)=>(<li key={item?.card?.info?.id}><img src={(MENU_IMG_URL+item?.card?.info?.imageId)}/></li>))}
                {itemCards.map((item)=>(<li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"₹ "}{item?.card?.info?.defaultPrice/100 || item?.card?.info?.finalPrice/100 || item?.card?.info?.price/100}</li>))} 
            </ul>
        </div>
    );
};

export default RestaurantMenu;