import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { lineData } from '../../dummy'
Chart.register(...registerables)

const options = {
  maintainAspectRatio: false,
}

const Lines = () => {
  return (
    <>
      <h1 className="text-3xl">Main title</h1>

      <div className="flex">
        <div className="flex flex-col justify-center items-center">
          <h2>Chart title 1</h2>
          <div>
            <Line
              data={lineData}
              options={options}
              width={'400px'}
              height={'250px'}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2>Chart title 1</h2>
          <div>
            <Line
              data={lineData}
              options={options}
              width={'400px'}
              height={'250px'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Lines
