import logo from "../../imgs/svg/logo-no-background.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RiWifiOffLine } from "react-icons/ri";
import { MdOnlinePrediction } from "react-icons/md";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex items-center justify-between p-3 mb-4 border-b border-gray-400 shadow-md">
      <div className="max-w-60">
        <img className="w-60 h-auto" src={logo} />
      </div>
      <div >
        <ul className="flex">
          <li className="flex items-center justify-between m-4 p-2 text-[17.5px] text-gray-800 font-kanit font-normal">
            {" "}
            Online Status:
            {onlineStatus ? (
              <MdOnlinePrediction  size={20} style={{ marginLeft: "8px" } } />
            ) : (
              <RiWifiOffLine  size={20} style={{ marginLeft: "8px" }} />
            )}
          </li>
          <li className=" m-4 p-2 text-[17.5px]  text-gray-800 font-kanit font-normal">
            <Link to="/">Home</Link>
          </li>
          <li className=" m-4 p-2 text-[17.5px]  text-gray-800 font-kanit font-normal">
            <Link to="/About">About Us</Link>
          </li>
          <li className=" m-4 p-2 text-[17.5px]  text-gray-800 font-kanit font-normal">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className=" m-4 p-2 text-[17.5px]  text-gray-800 font-kanit font-normal">Cart</li>
          <button
            className=" m-4 p-2 text-[17.5px]  text-gray-800 font-kanit font-normal"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
