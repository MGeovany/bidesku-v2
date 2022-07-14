import React from 'react'
import { Graphics } from './Graphics'
import { Header } from '../../components/Header'
import './Home.css'
import { TableHome } from './TableHome'
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
      <hr />
      <Graphics />
      <TableHome />
    </div>
  )
}
