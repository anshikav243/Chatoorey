import VegNonVeg from "./VegNonVeg";
import { IoIosStar } from "react-icons/io";
import { CDN_URL } from "../utils/constants";

const AccordionBody = ({ items }) => {
  console.log(items);
  return (
    <div className="">
      {items.map((item) => (
        <div key={item.card.info.name}>
          <div>
            <hr className="border-t-2 border-[#E9E9EB] my-11 w-[750px]" />
          </div>
          <div
            className="m-4 w-[750px] flex justify-between"
            key={item?.card?.info?.id}
          >
            <div>
              <span>
                <VegNonVeg data={item.card.info.isVeg} />
              </span>
              <span className="font-Roboto font-bold text-[#414449] text-lg">
                {item.card.info.name}
              </span>
              <p className="text-sm font-bold">
                <>&#8377;</>
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.finalPrice
                  ? item.card.info.finalPrice / 100
                  : item.card.info.price / 100}
              </p>
              <div>
                {item.card.info.ratings?.aggregatedRating?.rating ? (
                  <span className="flex items-center text-sm my-1">
                    <IoIosStar
                      style={{ color: "#1BA672", fontSize: "0.8em" }}
                    />
                    <span className="text-[#1BA672] font-bold mx-1 font-Fira text-smS">
                      {item.card.info.ratings?.aggregatedRating?.rating}
                    </span>
                    <span className="text-[#676A6D] font-medium font-Fira text-sm">
                      ({item.card.info.ratings?.aggregatedRating?.ratingCountV2}
                      )
                    </span>
                  </span>
                ) : null}
              </div>
              <p className="w-[450px] text-sm text-[#676A6D] mt-2">
                {item.card.info.description}
              </p>
            </div>
            <div className="relative flex flex-col items-center justify-center">
              {item?.card?.info?.imageId ? (
                <img
                  alt="res-img"
                  className="w-40 h-36 object-cover rounded-2xl"
                  src={CDN_URL + item?.card?.info?.imageId}
                />
              ) : null}

              <button className="absolute inset-x-0 bottom-0 transform translate-y-1/2 bg-white text-[#1BA672] font-extrabold text-lg w-28 mx-auto rounded-lg shadow-lg py-1.5 ">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionBody;
