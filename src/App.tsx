import ChartComponent from "./components/chart.tsx";

function App() {

  return (
    <>
      <main className="p-10 bg-gray-100 min-h-[100vh]">
        <div className="flex">
          <div className="w-3/4">
            <ChartComponent />
          </div>
          <div className="w-1/4">
            Other Components
          </div>
        </div>
      </main>
    </>
  )
}

export default App
