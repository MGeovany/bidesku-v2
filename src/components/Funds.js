import React, { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
// import faker from 'faker'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'start',
      boxHeight: 30,
      padding: 30,
      usePointStyle: true,
      pointStyle: 'circle'
    }
  }
}

export const Funds = () => {
  const [age, setAge] = useState(72)

  const labels = [age, 'Age 75', 'Age 85', 'Age 90']

  const data = {
    labels,
    datasets: [
      {
        label: 'Index Funds Alone',
        data: [190000, 240000, 430000, 575000],
        backgroundColor: 'rgb(155,164,179)'
      },
      {
        label: 'With BiDeskU',
        data: [243000, 323000, 1055000, 2710000],
        backgroundColor: 'rgb(0,209,178)'
      }
    ]
  }

  return (
    <div className='estimator__card__container'>
      <div className='card estimator__card__container'>
        <div className='card-content'>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}
