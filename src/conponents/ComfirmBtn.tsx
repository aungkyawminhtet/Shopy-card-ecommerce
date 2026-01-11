import type { ReactNode } from "react";

interface ComfirmBtnProps {
  children: ReactNode;
  onClick?: () => void;
}

const ComfirmBtn = ({ children, onClick }: ComfirmBtnProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="p-2.5 w-full bg-amber-600 text-xl text-white font-bold rounded-full cursor-pointer"
      >
        {children}
      </button>
    </>
  );
};

export default ComfirmBtn;
