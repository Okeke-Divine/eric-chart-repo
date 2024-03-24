import { Chart as ChartJs, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
// import the data or replace sourceData using a response from the api
import sourceData from "../data/sourceData.json";
// import ui svg(s)
import ArrowUpIcon from "../assets/svgs/arrow-up.svg";
import CalendarIcon from "../assets/svgs/calendar.svg";
import CheckMarkCircleIcon from "../assets/svgs/checkmark-circle.svg";
import GraphIcon from "../assets/svgs/grpah.svg";

// chart default settings
defaults.maintainAspectRatio = false;
defaults.responsive = true;
// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
// defaults.plugins.title.color = "black";

function ChartComponent() {
  return (
    <>
      <div className="bg-white p-10 rounded-2xl duration hover:shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <button className="p-2 pl-3 pr-3 rounded-lg bg-gray-100 text-gray-400 flex gap-x-2 items-center">
              <div>
                <img src={CalendarIcon} />
              </div>
              <div className="font-semibold">This Month</div>
            </button>
          </div>
          <div>
            <button className="bg-gray-100 p-2 pl-3 pr-3 rounded-lg">
              <img src={GraphIcon} />
            </button>
          </div>
        </div>
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
          <div className="mt-2 md:mt-0 w-full md:w-3/4">
            {/* chart */}
            <Line
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Revenue",
                    data: sourceData.map((data) => data.revenue),
                    backgroundColor: "rgba(31,41,55,0.9)",
                    borderColor: "rgba(31,41,55,0.9)",
                    borderWidth: 3,
                  },
                  {
                    label: "Cost",
                    data: sourceData.map((data) => data.cost),
                    backgroundColor: "rgba(31,41,55,0.4)",
                    borderColor: "rgba(31,41,55,0.4)",
                    borderWidth: 3,
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
                  tooltip: {
                    yAlign: "bottom",
                    enabled: true,
                    displayColors: false,
                    callbacks: {
                      title: () => null,
                      label: function (context) {
                        let label = "";

                        if (label) {
                          label += ": ";
                        }
                        if (context.parsed.y !== null) {
                          label += new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(context.parsed.y);
                        }
                        return label;
                      },
                    },
                  },
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    display: false,
                    grid: {
                      display: false,
                    },
                  },
                },
                layout: {
                  padding: 0
                },
                interaction: {
                  intersect: false // Disable line intersection events
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
