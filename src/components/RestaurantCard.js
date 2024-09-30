import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const{cloudinaryImageId,avgRating,name,sla,cuisines,costForTwo,aggregatedDiscountInfoV3} = resData?.info;

    return (
        <div className="m-4 w-[220px] p-2 justify-evenly items-center transition-all duration-300 hover:scale-110">
          <div>
            <img alt="res-img" className="w-100% h-[260px] object-cover rounded-2xl"
            src={CDN_URL+cloudinaryImageId}/>
          </div>
          <h3 className="line-clamp-1  font-SUSE font-semibold text-[17px] pt-2 ">{name}</h3>
          <div className="flex justify-between pb-2">
              <div className="flex">
                <span>&#9733;</span>
                <span className="font-kanit"> {avgRating} stars</span>
              </div>
              <p className="font-kanit">{sla.slaString}</p>
          </div>
          <p className="line-clamp-1 text-gray-800 text-[15px]">{cuisines.join(", ")}</p>
          <p className="text-gray-800 text-[15px]">{costForTwo}</p> 
        </div>

    )
};

export const withHeaderRestaurantCard = (RestaurantCard) => {
  return (props) => {
    const {resData} = props;
    const{aggregatedDiscountInfoV3} = resData?.info;
    return (
      <div className="relative w-[220px] ">   
        <div className="absolute translate-y-[160px] h-[84px] w-[204px] bg-gradient-to-t from-gray-950 m-6 rounded-2xl"></div>  
        <span className="absolute translate-y-52 w-full text-white m-8 rounded-b-lg font-bold text-lg font-kanit ">
        {aggregatedDiscountInfoV3.header + (aggregatedDiscountInfoV3.subHeader ? " " + aggregatedDiscountInfoV3.subHeader : "")}
        </span>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;