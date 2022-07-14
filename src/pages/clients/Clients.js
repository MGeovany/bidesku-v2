import React from 'react'
import { ContractsTable } from '../../components/ContractsTable'
import { Header } from '../../components/Header'
import { DropdowContracts } from '../../components/DropdowContracts'

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
      <br />
      <hr />
      <ContractsTable dpdwn={<DropdowContracts />} />
    </div>
  )
}
