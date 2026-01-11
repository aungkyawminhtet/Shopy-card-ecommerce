import cardIcon from "../assets/images/icon-add-to-cart.svg";
import { useCardContext } from "./CardContextProvider";
const Navbar = () => {
  const { data } = useCardContext();
  const cardData = data.filter((item) => item.selected !== false);
  return (
    <div className="flex items-center justify-between w-full md:w-[75%] md:pr-6 fade-in">
      <h1 className="font-sans font-bold text-4xl md:text-5xl my-3 text-ani">
        Desserts
      </h1>
      <div className="relative text-ani">
        <img
          src={cardIcon}
          alt="Add to cart icon"
          className="w-6 h-6 text-black"
        />
        <span
          className={`absolute flex items-center justify-center bg-red-600 border rounded-full w-6 h-6 text-white -top-4 ${
            cardData.length >= 100
              ? "text-sm w-7 h-7 -right-6"
              : "text-base -right-4"
          }`}
        >
          {cardData.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
