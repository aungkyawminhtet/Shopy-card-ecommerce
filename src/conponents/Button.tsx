import { useState, type ReactNode } from "react";
import cardIcon from "../assets/images/icon-add-to-cart.svg";
import addIcon from "../assets/images//icon-increment-quantity.svg";
import subIcon from "../assets/images/icon-decrement-quantity.svg";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
  width?: string;
  disabled?: boolean;
  count?: number;
  incrementCounter?: () => void;
  decrementCounter?: () => void;
}

const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    isSelected,
    width = "120px",
    count,
    incrementCounter,
    decrementCounter,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <button
        onClick={onClick}
        style={{ width: width }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
            flex items-center justify-center px-4 h-10 border border-amber-900 rounded-full disabled:cursor-not-allowed disabled:opacity-50 box-border ${
              isSelected
                ? "bg-linear-to-r from-amber-300 to-amber-500"
                : " bg-white cursor-pointer hover:bg-linear-to-r hover:from-amber-300 hover:to-amber-500 hover:transition-all hover:duration-300 "
            }`}
      >
        {isSelected ? (
          selectedButton(count!, incrementCounter!, decrementCounter!)
        ) : (
          <div className="flex items-center gap-x-3 ">
            <img
              src={cardIcon}
              alt="Add to card icon text-ani"
              className={`w-4 h-4  ${isHovered ? "card-ani" : ""}`}
            />
            {children}
          </div>
        )}
      </button>
    </>
  );
};

const selectedButton = (
  count: number,
  incrementCounter: () => void,
  decrementCounter: () => void
) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div
        onClick={decrementCounter}
        className="border border-white cursor-pointer rounded-full p-0.5"
      >
        <img src={subIcon} alt="subtract icon" className="w-3 h-3" />
      </div>
      <span className=" text-white text-2xl">{count}</span>
      <div
        onClick={incrementCounter}
        className="border border-white cursor-pointer rounded-full p-0.5"
      >
        <img src={addIcon} alt="add icon" className="w-3 h-3" />
      </div>
    </div>
  );
};

export default Button;
