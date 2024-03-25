export default function TotalOrders() {
  return (
    <>
      <div className="w-full md:w-1/3 mb-2 md:mb-0 p-5 rounded-lg shadow-sm duration-300 hover:shadow-md">
        <div className="block md:flex mt-5 flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="text-4xl font-bold">$37.5K</div>
            <div className="flex gap-x-3 items-center">
              <div className="text-gray-400">Total Spent</div>
              <div className="cs-text-green font-semibold flex gap-x-1 items-center">
                <div>
                  <img src={ArrowUpIcon} />
                </div>
                <div>+2.45%</div>
              </div>
            </div>
            <div className="cs-text-green mt-5 font-semibold flex gap-x-2 items-center">
              <div>
                <img src={CheckMarkCircleIcon} />
              </div>
              <div>On Track</div>
            </div>
          </div>
          <div className="mt-2 md:mt-0 w-full md:w-3/4"></div>
        </div>
      </div>
    </>
  );
}
