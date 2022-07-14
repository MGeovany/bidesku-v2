import React from 'react'
import { Header } from '../../components/Header'

export const Clients = () => {
  return (
    <div className='container is-flex is-flex-direction-column'>
      <Header
        legend={{
          label: 'Clients & Contracts'
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
    </div>
  )
}
