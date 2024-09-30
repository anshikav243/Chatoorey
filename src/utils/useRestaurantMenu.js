import { MENU_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   {/**  const data = await fetch("https://proxy.cors.sh/" + MENU_API + resId, {
      headers: {
      'x-cors-api-key': 'temp_460d559a81db3d1041396c4916717ed8'
      }
    }); */}
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;