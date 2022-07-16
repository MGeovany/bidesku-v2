import React from 'react'
import { ContractsTable } from '../../components/ContractsTable'
import { Header } from '../../components/Header'
import { DropdowContracts } from '../../components/DropdowContracts'
import { motion } from 'framer-motion'

export const Clients = () => {
  return (
    <div className='page__container container is-flex is-flex-direction-column'>
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -25, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
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
      </motion.div>
    </div>
  )
}
