import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IoMdSearch } from "react-icons/io";
import { withHeaderRestaurantCard } from "./RestaurantCard";
{
  /**https://proxy.cors.sh/ append before swiggy api */
}

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantHeader = withHeaderRestaurantCard(RestaurantCard);

  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",  {
        headers: {
        'x-cors-api-key': 'temp_460d559a81db3d1041396c4916717ed8'
        }
      }
    );
    const json = await data.json();
    console.log(json);
    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    ); //optional chaining

    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // CONDITIONAL RENDERING - loading shimmer before api has not responded

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <Error />;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="w-[95%]">
        <div className="flex items-center w-[1300px]">
          <div className="w-[500px] relative">
            <input
              type="text"
              className="w-full p-2 m-3 rounded-full border border-gray-600 text-[#414449] text-[14px]"
              value={searchText}
              placeholder="Search for restaurant, cuisine or a dish"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);
              }}
            >
              <IoMdSearch />
            </button>
          </div>
          <button
            className="border border-gray-600 mr-2 py-1 px-2 rounded-2xl text-[#414449] font-semibold text-[14px] mx-8"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="w-full flex justify-center items-center">
          {/* <div className="flex flex-wrap justify-self-stretch "> */}
          <div className="flex flex-wrap justify-around ">
            {filteredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
               {restaurant.info.aggregatedDiscountInfoV3?(<RestaurantHeader resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)} 
                
              </Link>
            ))}
          </div>
        </div>
        </div>
    </div>
  );
};

export default Body;
