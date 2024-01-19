import React, { useState } from 'react'
import { Graphics } from './Graphics'
import { Header } from '../../components/Header'
import './Home.css'
import { ContractsTable } from '../../components/ContractsTable'

import { motion } from 'framer-motion'
import { CreateContract } from '../../modals/CreateContract'

export const Home = () => {
  // hook for a modal from bulma
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      <div className='page__container container is-flex is-flex-direction-column is-flex-wrap-wrap'>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Header
            legend={{
              user: 'Marlon Castro',
              label: 'Welcome, '
            }}
            buttons={[
              {
                label: 'Start New Contract',
                onClick: () => {
                  toggleModal()
                }
              }
            ]}
          />
          <div className='is-flex is-flex-direction-column '>
            <Graphics />
            <ContractsTable label={'Contracts Table'} />
          </div>
        </motion.div>
        {isModalOpen && (
          <CreateContract isModalOpen={isModalOpen} toggleModal={toggleModal} />
        )}
      </div>
    </>
  )
}
