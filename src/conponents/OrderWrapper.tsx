import React from "react";
import type { DataType } from "../constant/data";

//icon and images
import comfirmIcon from "../assets/images/icon-order-confirmed.svg";
import reomveIcon from "../assets/images/icon-remove-item.svg";
import ComfirmBtn from "./ComfirmBtn";

interface OrderWrapperProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  total: number;
  dataArr: DataType[];
  restItems: () => void;
}

const OrderWrapper = (props: OrderWrapperProps) => {
  const { isActive, setIsActive, total, dataArr, restItems} = props;
  return (
    <>
      {isActive && (
        <div className="flex min-h-screen min-w-screen items-center justify-center backdrop-blur-sm shadow-lg p-4 z-50 overflow-y-auto overflow-x-hidden fixed top-0 left-0">
          <div className="flex flex-col bg-white w-87.5 md:w-120 p-5 rounded-xl justify-center space-y-4">
            <div className="flex items-center justify-between">
              <div className="">
                <img
                  src={comfirmIcon}
                  alt="Order Confirmed"
                  className="w-10 h-10 mb-4"
                />
                <h1 className="font-sans font-bold text-2xl text-gray-800">
                  Order Confirmed
                </h1>
              </div>
              <img
                src={reomveIcon}
                onClick={() => setIsActive(false)}
                alt="Remove Icon"
                className="w-10 h-10 p-2 mr-3 cursor-pointer text-red-600 border border-red-600 rounded-full hover:bg-red-600 hover:text-white hover:transition-all hover:duration-300"
              />
            </div>
            <h4 className="text-amber-800/70">We hope you enjoy your food!</h4>
            <div className="bg-amber-500/10 px-3 py-2 rounded-xl">
              {dataArr.map((item) => (
                <div className="flex items-center justify-between border-b border-amber-600/20 py-1">
                  <div className="flex items-center space-x-3">
                    <img
                      src={item.mobImg}
                      alt={item.alt}
                      className="w-10 h-10 object-cover rounded-xs"
                    />
                    <div>
                      <span className="text-amber-950">{item.name}</span>
                      <div className="flex space-x-4 items-center">
                        <span className="text-amber-700/80">
                          {item.itemsCount}x
                        </span>
                        <span className="text-amber-700/80">@{item.price}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-amber-950/80 font-bold">
                      ${(item.itemsCount * parseFloat(item.price)).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between py-3">
                <span className="font-semibold">Order Total </span>
                <span className="font-bold font-sans text-2xl text-gray-950">${total.toFixed(2)}</span>
              </div>
            </div>
            <ComfirmBtn onClick={restItems}>Start New Order</ComfirmBtn>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderWrapper;
