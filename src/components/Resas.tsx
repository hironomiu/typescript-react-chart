import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js'
import { usePrefectures, usePopulationComposition } from '../queries'
import { Prefectures } from '../types'
import { LineData, backgroundColor, borderColor } from '../dummy'

Chart.register(...registerables)

const options = {
  maintainAspectRatio: false,
}

const Resas = () => {
  const [apiKey, setApiKey] = useState<string>('')
  const [checkedVals, setCheckedVals] = useState<string[]>([])
  const [checkedVal, setCheckedVal] = useState<string>('1')
  const [lineData, setLineData] = useState<LineData>()
  const { prefecturesData, prefecturesRefetch } = usePrefectures({ apiKey })
  const { populationCompositionRefetch } = usePopulationComposition({
    apiKey,
    prefCode: checkedVal,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value)
    // setApiKey('e.target.value')
  }

  const handleClick = () => prefecturesRefetch()

  const handleChangeCheckbox = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e.target.value)
    const prefData = prefecturesData.find(
      (pref: any) => pref.prefCode === Number(e.target.value)
    )
    if (checkedVals.includes(e.target.value)) {
      setCheckedVals((prev) => [...prev.filter((p) => p !== e.target.value)])
      setLineData(
        (prev: any) =>
          (prev = {
            labels: [...prev.labels],
            datasets: [
              ...prev.datasets.filter(
                (p: any) => p.label !== prefData.prefName
              ),
            ],
          })
      )
    } else {
      setCheckedVals((prev) => (prev = [...prev, e.target.value]))
      setCheckedVal(e.target.value)

      populationCompositionRefetch().then((d: any) => {
        console.log(d.data.data)

        setLineData((prev: any) => {
          if (prev) {
            return {
              labels: [...d.data.data[0].data.map((d: any) => d.year)],
              datasets: [
                ...prev?.datasets,
                {
                  label: prefData.prefName,
                  data: [...d.data.data[0].data.map((d: any) => d.value)],
                  backgroundColor: backgroundColor,
                  borderColor: borderColor,
                  borderWidth: 1,
                },
              ],
            }
          } else {
            return {
              labels: [...d.data.data[0].data.map((d: any) => d.year)],
              datasets: [
                {
                  label: prefData.prefName,
                  data: [...d.data.data[0].data.map((d: any) => d.value)],
                  backgroundColor: backgroundColor,
                  borderColor: borderColor,
                  borderWidth: 1,
                },
              ],
            }
          }
        })
      })
    }
  }

  return (
    <>
      <div>
        <span>RESAS API KEY</span>
        <input
          type="password"
          className=" w-96 ml-2 px-1 border-2 h-8"
          value={apiKey}
          onChange={handleChange}
        />
        <button
          onClick={handleClick}
          className="ml-2 bg-blue-400 w-20 h-8 rounded"
        >
          Send
        </button>
      </div>
      <div className=" w-2/3 mt-10">
        {prefecturesData
          ? prefecturesData.map((pref: Prefectures) => (
              <li key={pref.prefCode} className="inline-block p-1">
                <input
                  type="checkbox"
                  value={pref.prefCode.toString()}
                  id={pref.prefCode.toString()}
                  onChange={handleChangeCheckbox}
                  checked={checkedVals.includes(pref.prefCode.toString())}
                />
                <label htmlFor={pref.prefCode.toString()}>
                  {pref.prefName}
                </label>
              </li>
            ))
          : null}
        <div className="mt-4 mb-10">
          {lineData ? (
            <Line
              data={lineData}
              options={options}
              width={'800px'}
              height={'400px'}
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

export default Resas
