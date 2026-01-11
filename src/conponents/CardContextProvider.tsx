import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { Data, type DataType } from "../constant/data";


interface cardDataProps {
  id: number;
  name: string;
  price: string;
  mobImg: string;
  subName: string;
}

interface CardContextProviderProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  incrementCounter: (id: number) => void;
  decrementCounter: (id : number) => void;
  setCardData?: React.Dispatch<React.SetStateAction<cardDataProps[]>>;
  addCardData: (id : number) => void;
  data : DataType[];
  removeItem: (id : number) => void;
  restItems: () => void;
}

const CardContext = createContext<CardContextProviderProps | null>(null);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }
  return context;
};

const CardContextProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<DataType[]>(Data);

  const incrementCounter = (id: number) => {
    setData((prev) => prev.map((item) => item.id === id ? {...item, itemsCount: item.itemsCount + 1} : item));
    
  }

  const decrementCounter = (id: number) => {
    setData((prev) => prev.map((item) => item.id === id && item.itemsCount > 0 ? {...item, itemsCount: item.itemsCount - 1} : item));
  };

  const addCardData = (id: number) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, selected: true}
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setData((prev) => prev.map((item) => item.id === id ? {...item, selected: false} : item))
  }

  const restItems = () => {
    setData((prev) => prev.map((item) => ({...item, selected: false, itemsCount: 1})));
  }

  return (
    <CardContext.Provider
      value={{
        count,
        setCount,
        incrementCounter,
        decrementCounter,
        addCardData,
        removeItem,
        restItems,
        data
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
