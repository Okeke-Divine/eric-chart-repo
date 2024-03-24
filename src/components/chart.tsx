// import {Chart as ChartJs, default}
import { Chart as ChartJs, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function ChartComponent() {
  return (
    <>
      <div className="bg-white p-10 rounded-2xl shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <button className="p-2 pl-3 pr-3 rounded-lg bg-gray-100 text-gray-400 flex gap-x-2">
              <div>.</div>
              <div className="font-semibold">This Month</div>
            </button>
          </div>
          <div>|||</div>
        </div>
        <div className="block md:flex mt-5 flex-wrap">
          <div className="w-full md:w-1/4">
            <div className="text-4xl font-bold">$37.5K</div>
            <div className="flex justify-between items-center flex-wrap">
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
          <div className="mt-2 md:mt-0 w-full md:w-3/4">
            {/* chart */}
            <Line
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Revenue",
                    data: sourceData.map((data) => data.revenue),
                    backgroundColor: "black",
                    borderColor: "black",
                  },
                  {
                    label: "Cost",
                    data: sourceData.map((data) => data.cost),
                    backgroundColor: "gray",
                    borderColor: "gray",
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.5,
                  },
                },
                plugins: {
                  title: {
                    text: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ChartComponent;
