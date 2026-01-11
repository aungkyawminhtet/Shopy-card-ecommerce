import { useCardContext } from "./CardContextProvider";
import { useState } from "react";
//icons
import emptyImg from "../assets/images/illustration-empty-cart.svg";
import reomveIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";
//components
import ComfirmBtn from "./ComfirmBtn";
import OrderWrapper from "./OrderWrapper";

const OrderLists = () => {
  const [isActive, setIsActive] = useState(false);
  const { data, removeItem, restItems } = useCardContext();
  const chooseData = data.filter((item) => item.selected !== false);

  let total: number = 0;

  data.map(
    (item) =>
      item.selected && (total += item.itemsCount * parseFloat(item.price))
  );

  const restCardData = () => {
    setIsActive(false);
    restItems();
  }

  return (
    <>
      <div className="w-full p-4 bg-white rounded-xl shadow-xl fade-in">
        {chooseData.length === 0 ? (
          <div className="flex flex-col">
            <h1 className="font-bold text-amber-700 text-2xl text-ani">
              Your Card - ({chooseData.length})
            </h1>
            <div className="flex flex-col items-center">
              <img
                src={emptyImg}
                alt="Empty Cart"
                className="w-[90%] object-cover"
              />
              <span className="text-amber-900 text-ani">
                Your added items will appear in Here
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <h1 className="font-bold text-amber-700 text-2xl mb-3 text-ani">
              Your Card - ({chooseData.length})
            </h1>

            {chooseData.map((item) => (
              <div key={item.id} className="border-b p-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-amber-950">{item.name}</span>
                    <div className="flex space-x-3">
                      <span className="text-amber-700">{item.itemsCount}x</span>
                      <span className="ml-2 text-amber-700/80">@{item.price}</span>
                      <span className="ms-2 text-amber-700/80">
                        ${(item.itemsCount * parseFloat(item.price)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <img
                    src={reomveIcon}
                    alt="remove icon "
                    className="w-4 h-4 cursor-pointer border border-amber-700 rounded-full p-0.5"
                    onClick={() => removeItem(item.id)}
                  />
                </div>
              </div>
            ))}
            <div className="flex items-center w-full justify-between py-4">
              <span>Order Total : </span>
              <span className="font-bold text-xl text-gray-800">{total.toFixed(2)}</span>
            </div>
            <div className="flex w-full items-center justify-center gap-x-1 px-1 py-2 bg-amber-700/5 rounded">
              <img
                src={carbonIcon}
                alt="carbon neutral icon"
                className="w-5 h-5"
              />
              <span className="">
                This is a <b>carbon-neutral</b> delivery.
              </span>
            </div>
            <div className="w-full mt-3">
              <ComfirmBtn onClick={() => setIsActive(true)}>
                Comfirm Order
              </ComfirmBtn>
            </div>
          </div>
        )}
      </div>
      <OrderWrapper
        isActive={isActive}
        setIsActive={setIsActive}
        total={total}
        dataArr={chooseData}
        restItems={restCardData}
      />
    </>
  );
};

export default OrderLists;
