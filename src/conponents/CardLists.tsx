import Button from "./Button";
import { useCardContext } from "./CardContextProvider";
import type { DataType } from "../constant/data";
const CardLists = () => {
  const { addCardData, data, incrementCounter, decrementCounter } =
    useCardContext();

  const AddItem = (addItem: DataType) => {
    // const newItem = {
    //   id: addItem.id,
    //   name: addItem.name,
    //   price: addItem.price,
    //   mobImg: addItem.mobImg,
    //   subName: addItem.subname,
    // };

    const checkItem = data.find((item) => item.id === addItem.id);
    if (checkItem) {
      addCardData(addItem.id);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full flex-wrap fade-in pb-5">
      {data.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col shadow-lg rounded-xl hover:scale-103 transition-all duration-300 bg-white ${
            item.selected ? "border-2 border-amber-500" : ""
          }`}
        >
          <div className="w-full relative flex-col justify-center">
            <img
              src={item.desImg}
              alt={item.alt}
              className="object-cover w-full rounded-t-xl"
            />
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-5">
              <Button
                disabled={false}
                width="180px"
                isSelected={item.selected}
                onClick={() => AddItem(item)}
                count={item.itemsCount}
                incrementCounter={() => incrementCounter(item.id)}
                decrementCounter={() => decrementCounter(item.id)}
              >
                <span className="text-ani">Add to Cart</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col px-4 py-6 space-y-2">
            <span className="text-xs text-amber-600 font-serif text-ani">
              {item.subname}
            </span>
            <div className="flex items-center justify-between">
              <span className="text-xl font-serif text-ani">{item.name}</span>
              <span className="text-orange-800 font-semibold text-xl text-ani">
                {item.price}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLists;
