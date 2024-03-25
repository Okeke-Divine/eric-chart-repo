import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// import ArrowDownIcon from "../assets/svgs/arrow-down.svg";
// import ArrowUpIcon from "../assets/svgs/arrow-up.svg";


// chart default settings
defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function TotalProfit() {
  return (
    <>
      <div className="w-full bg-white md:w-1/3 mb-2 md:mb-0 p-5 rounded-lg shadow-sm duration-300 hover:shadow-md">
        <div className="block md:flex mt-5 flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="text-xl font-semibold">Total Profits</div>
            <div className="text-gray-400">Last 7 days</div>
            <div className="mt-5">
              <div className="font-bold text-4xl">40K</div>
              <div className="mt-2 flex gap-x-2">
                <div className="cs-text-green flex items-center gap-x-1">
                  <div>
                    {/* <ArrowUpIcon /> */}
                  </div>
                  <div>10%</div>
                </div>
                <div className="text-gray-400">vs last 7 days</div>
              </div>
            </div>
          </div>
          <div className="mt-2 md:mt-0 w-full md:w-1/2"></div>
        </div>
      </div>
    </>
  );
}
