import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IoMdSearch } from "react-icons/io";
{
  /**https://proxy.cors.sh/ append before swiggy api */
}

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(listOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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

  if (onlineStatus === false) return <Error/>;
  

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" ">
      <div className="flex justify-between items-center">
        <div className="w-[500px] relative">
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 m-3 rounded-full border border-rose-950" 
              value={searchText} placeholder="Search for restaurant, cuisine or a dish"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full"
              onClick={() => {
                const filteredRestaurants = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filteredRestaurants);
                console.log(searchText);
              }}
            >
             <IoMdSearch />
            </button>
          </div>
        </div>
        <button
          className="border border-gray-600 mr-3 py-1 px-2 rounded-2xl text-[#414449] font-semibold text-[14px]"
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
      <div className="flex flex-wrap justify-self-stretch">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
