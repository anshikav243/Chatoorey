import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const{cloudinaryImageId,avgRating,name,sla,cuisines,costForTwo} = resData?.info;

    return (
        <div className="m-4 w-[220px] p-2 justify-evenly">
          <img alt="res-img" className="w-100% h-[260px] object-cover rounded-2xl"
          src={CDN_URL+cloudinaryImageId}/>
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

export default RestaurantCard;