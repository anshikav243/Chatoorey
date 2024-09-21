import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

{/*"https://proxy.cors.sh/" +*/}

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch( "https://thingproxy.freeboard.io/fetch/"+MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
