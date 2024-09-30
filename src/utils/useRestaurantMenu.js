import { MENU_API } from "./constants";
import { useState, useEffect } from "react";
import { CORS_API_KEY } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://proxy.cors.sh/" + MENU_API + resId, {
      headers: {
      'x-cors-api-key': CORS_API_KEY
      }
    }); 
     {/** const data = await fetch(MENU_API + resId); */}
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;