import React from 'react'
import { ContractsTable } from '../../components/ContractsTable'
import { Header } from '../../components/Header'
import { DropdowContracts } from '../../components/DropdowContracts'
import { motion } from 'framer-motion'

export const Clients = () => {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -25, opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
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
        <ContractsTable dpdwn={<DropdowContracts />} />
      </div>
    </motion.div>
  )
}
