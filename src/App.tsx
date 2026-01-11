import "./App.css";
import CardLists from "./conponents/CardLists";
import Navbar from "./conponents/Navbar";
import OrderLists from "./conponents/OrderLists";

function App() {
  return (
    <div className="flex bg-amber-100/30 min-w-full min-h-screen">
      <div className="mx-auto w-[90%]">
        <Navbar />
        <div className="flex flex-wrap flex-row gap-6 w-full">
          <div className="w-full md:w-[74%]">
            <CardLists />
          </div>
          <div className="w-full md:w-[24%]">
            <OrderLists />
          </div>
        </div>
        <div className="text-center pb-2">
          <span className="text-ani text-amber-700/70">
            Copyright &copy; 2026 akmh(mfu)
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
