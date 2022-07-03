import { Chart, registerables } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

Chart.register(...registerables)

const data = [15, 25, 35, 30, 15, 11, 10, 40, 5, 30, 20, 20, 15].sort(
  (a, b) => b - a
)

const backgroundColor = [
  '#3490de',
  '#fab57a',
  '#edf798',
  '#7effdb',
  '#ff9de2',
  '#80d6ff',
  '#ff5959',
  '#bceb3c',
  '#b693fe',
  '#8c82fc',
  '#f25d9c',
  '#e1eeff',
  '#c2cfd8',
]

const labels = [
  'item1',
  'item2',
  'item3',
  'item4',
  'item5',
  'item6',
  'item7',
  'item8',
  'item9',
  'item10',
  'item11',
  'item12',
  'item13',
]

const graphdata = {
  datasets: [
    {
      data: data,
      backgroundColor: backgroundColor,
    },
  ],
  labels: labels,
}

const doughnutOptions = {
  maintainAspectRatio: false,
}

const Doughnuts = () => {
  return (
    <>
      <h1 className="text-3xl">Main title</h1>
      <div className="flex flex-col justify-center items-center">
        <div className="flex">
          <div className="flex flex-col justify-center items-center mt-4">
            <h2 className="text-xl">Chart title 1</h2>
            <div className=" w-[350px]">
              <Doughnut
                data={graphdata}
                options={doughnutOptions}
                width={'300px'}
                height={'300px'}
                onClick={(e: any) => console.log('clicked:', e)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <h2 className="text-xl">Chart title 1</h2>
            <div className=" w-[350px]">
              <Doughnut
                data={graphdata}
                options={doughnutOptions}
                width={'300px'}
                height={'300px'}
                onClick={(e: any) => console.log('clicked:', e)}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center items-center mt-4">
            <h2 className="text-xl">Chart title 1</h2>
            <div className=" w-[350px]">
              <Doughnut
                data={graphdata}
                options={doughnutOptions}
                width={'300px'}
                height={'300px'}
                onClick={(e: any) => console.log('clicked:', e)}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <h2 className="text-xl">Chart title 1</h2>
            <div className=" w-[350px]">
              <Doughnut
                data={graphdata}
                options={doughnutOptions}
                width={'300px'}
                height={'300px'}
                onClick={(e: any) => console.log('clicked:', e)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Doughnuts
