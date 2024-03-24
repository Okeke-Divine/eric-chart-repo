export default function ChartComponent() {
  return (
    <>
      <div className="bg-white p-10 rounded-2xl shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <button className="p-2 rounded-lg bg-gray-200 text-gray-400 flex gap-x-2">
              <div></div>
              <div>This Month</div>
            </button>
          </div>
          <div>|||</div>
        </div>
        <div className="flex mt-5">
          <div className="w-1/4">
            <div className="text-4xl font-bold">$37.5K</div>
            <div className="flex justify-between items-center">
              <div className="text-gray-400">Total Spent</div>
              <div className="cs-text-green font-semibold flex gap-x-2 items-center">
                <div>^</div>
                <div>+2.45%</div>
              </div>
            </div>
            <div className="cs-text-green mt-1 font-semibold flex gap-x-2 items-center">
              <div>()</div>
              <div>On Track</div>
            </div>
          </div>
          <div className="w-3/4"></div>
        </div>
      </div>
    </>
  );
}
