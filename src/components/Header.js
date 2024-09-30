import logo from "../../imgs/new_logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RiWifiOffLine } from "react-icons/ri";
import { MdOnlinePrediction } from "react-icons/md";
import LoginPage from "./LoginPage"; // Import the modal component

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const [showModal, setShowModal] = useState(false); // State to toggle the modal visibility
  const onlineStatus = useOnlineStatus();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex items-center justify-between p-3 mb-4 border-b border-gray-400 shadow-md">
      <div className="max-w-60">
        <img className="w-50 h-auto mx-6" src={logo} alt="logo"/>
      </div>
      <div>
        <ul className="flex">
          <li className="flex items-center justify-between m-4 p-2 text-[17.5px] text-gray-800 font-kanit font-normal">
            {" "}
            Online Status:
            {onlineStatus ? (
              <MdOnlinePrediction size={20} style={{ marginLeft: "8px" }} />
            ) : (
              <RiWifiOffLine size={20} style={{ marginLeft: "8px" }} />
            )}
          </li>
          <li className="m-4 p-2 text-[17.5px] text-gray-800 font-kanit font-normal">
            <Link to="/">Home</Link>
          </li>
          <li className="m-4 p-2 text-[17.5px] text-gray-800 font-kanit font-normal">
            <Link to="/About">About Us</Link>
          </li>
          <li className="m-4 p-2 text-[17.5px] text-gray-800 font-kanit font-normal">
            Cart
          </li>
          <button
            className="m-4 p-2 text-[17.5px] text-white font-kanit font-light bg-[#FF851B] rounded-2xl cursor-pointer hover:bg-[#E76B00]"
            onClick={() => {
              btnNameReact==="Login" ? toggleModal() : setbtnNameReact("Login");  // Toggle the modal visibility
              setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
      {/* Conditionally render the LoginPage modal */}
      {showModal && <LoginPage onClose={toggleModal} />}
    </div>
  );
};

export default Header;
