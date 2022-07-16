import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie, Doughnut } from 'react-chartjs-2'
import faker from 'faker'

ChartJS.register(ArcElement, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'start'
    },
    tittle: {
      display: true,
      text: 'Contracts'
    }
  }
}
export const dataCommerce = {
  labels: [
    faker.commerce.productName(),
    faker.commerce.productName(),
    faker.commerce.productName()
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [
        faker.random.number({ min: 200, max: 1000 }),
        faker.random.number({ min: 150, max: 1000 }),
        faker.random.number({ min: 50, max: 1000 })
      ],
      backgroundColor: [
        'rgba(3,195,240)',
        'rgba(255,221,104)',
        'rgba(0,209,178)'
      ]
    }
  ]
}

export const dataCompany = {
  // get data from company from faker
  labels: [
    faker.company.companyName(),
    faker.company.companyName(),
    faker.company.companyName()
  ],

  datasets: [
    {
      label: '# of Votes',
      data: [
        faker.random.number({ min: 0, max: 100 }),
        faker.random.number({ min: 0, max: 100 }),
        faker.random.number({ min: 0, max: 100 })
      ],
      backgroundColor: ['rgb(255,221,104)', 'rgb(0,209,178)', 'rgb(3,195,240)']
    }
  ]
}

export const Graphics = () => {
  return (
    <>
      <div className='is-flex-wrap-wrap is-flex is-flex-direction-row is-justify-content-space-around'>
        <div className='card p-6 mb-4'>
          <div className='mx-6'>
            <Doughnut data={dataCommerce} options={options} />
          </div>
        </div>
        <div className='card p-6 mb-4'>
          <div className='mx-6'>
            <Pie data={dataCompany} options={options} />
          </div>
        </div>
      </div>
    </>
  )
}
