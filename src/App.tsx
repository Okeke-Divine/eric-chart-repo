import TotalSpent from "./components/totalSpent.tsx";
import TotalOrders from "./components/totalOrder.tsx";
import TotalProfit from "./components/totalProfit.tsx";
import DiscountedAmount from "./components/discountedAmount.tsx";

function App() {

  return (
    <>
      <main className="p-10 bg-gray-100 min-h-[100vh]">
        <div className="mb-10 font-bold text-4xl bg-white w-fit p-5 rounded-lg shadow-sm duration-300 hover:shadow-md">
          Chart.js + React + React-ChartJs-2
        </div>
        <div className="block md:flex">
          <div className="w-full md:w-3/4">
            <TotalSpent />
          </div>
          <div className="w-full md:w-1/4">
            Other Components
          </div>
        </div>
        <div className="mt-5 block md:flex gap-x-5 items-center">
          <TotalOrders />
          <TotalProfit />
          <DiscountedAmount />
        </div>
      </main>
    </>
  )
}

export default App
