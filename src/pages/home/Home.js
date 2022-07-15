import React from 'react'
import { Graphics } from './Graphics'
import { Header } from '../../components/Header'
import './Home.css'
import { ContractsTable } from '../../components/ContractsTable'
export const Home = () => {
  return (
    <div className='container is-flex is-flex-direction-column '>
      <Header
        legend={{
          user: 'Marlon Castro',
          label: 'Welcome, '
        }}
        buttons={[
          {
            label: 'Start New Contract',
            onClick: () => {
              alert('hi')
            }
          }
        ]}
      />
      <Graphics />
      <ContractsTable label={'Pending Actions'} />
    </div>
  )
}
