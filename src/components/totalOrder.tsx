import { defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
// import the data or replace totalOrders using a response from the api
import totalOrders from "../data/totalOrders.json";
// import ui svg(s)
// import ArrowDownIcon from "../assets/svgs/arrow-down.svg";
// import ArrowUpIcon from "../assets/svgs/arrow-up.svg";

// chart default settings
defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function TotalOrders() {
  return (
    <>
      <div className="w-full bg-white md:w-1/3 mb-2 md:mb-0 p-5 rounded-lg shadow-sm duration-300 hover:shadow-md h-fit">
        <div className="block md:flex mt-5 flex-wrap">
          <div className="w-full md:w-1/2">
            <div className="text-xl font-semibold">Total Orders</div>
            <div className="text-gray-400">Last 7 days</div>
            <div className="mt-5">
              <div className="font-bold text-4xl">1.4K</div>
              <div className="mt-2 flex gap-x-2">
                <div className="cs-text-green flex items-center gap-x-1">
                  <div>{/* <ArrowUpIcon /> */}</div>
                  <div>4%</div>
                </div>
                <div className="text-gray-400">vs last 7 days</div>
              </div>
            </div>
          </div>
          <div className="mt-2 md:mt-0 w-full md:w-1/2">
            {/* chart */}
            <Line
              data={{
                labels: totalOrders.map((data) => data.label),
                datasets: [
                  {
                    label: "Orders",
                    data: totalOrders.map((data) => data.orders),
                    backgroundColor: "#1EB564", // Line color
                    borderColor: "#1EB564", // Border color
                    borderWidth: 3, // Line width
                    pointRadius: 0, // Hide points initially
                    hoverRadius: 8, // Hover radius
                    hoverBackgroundColor: "white", // Hover background color
                    hoverBorderColor: "#1EB564", // Hover border color
                    hoverBorderWidth: 3, // Hover border width
                  },
                ],
              }}
              options={{
                elements: {
                  line: {
                    tension: 0.7,
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
                          label += new Intl.NumberFormat("en-US").format(context.parsed.y);
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
                    ticks: {
                      color: "#1EB564", // Set color of x-axis labels to gray
                    },
                    grid: {
                      display: false,
                    },
                    display: false,
                  },
                  y: {
                    display: false,
                    grid: {
                      display: false,
                    },
                  },
                },
                interaction: {
                  intersect: false,
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
