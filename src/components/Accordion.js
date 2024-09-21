import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import AccordionBody from "./AccordionBody";
import { useState } from "react";

const Accordion = ({ data }) => {

  const [showItems,setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  
  return (
    <div className="">
        <div className="w-[760px] bg-[#F2F2F3] h-6 mb-6 mt-6"></div>
      <div>
        <h1 className="flex w-[680px] justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
            
          </span>
          <span>
            <MdOutlineKeyboardArrowDown />
          </span>
        </h1>
      </div>
      <div>
        {showItems && <AccordionBody items = {data.itemCards}/>}
      </div>
    </div>
  );
};

export default Accordion;
