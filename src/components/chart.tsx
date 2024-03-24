// import {Chart as ChartJs, default}
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};


export default function ChartComponent() {
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
          <div className="w-3/4">
            {/*<Line data={data} options={options} />*/}
          </div>
        </div>
      </div>
    </>
  );
}
