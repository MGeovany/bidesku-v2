import React from 'react'
import { ClientProfile } from '../../components/ClientProfile'
import { Funds } from '../../components/Funds'
import { Header } from '../../components/Header'
import { ShareEstimator } from '../../components/ShareEstimator'
import { motion } from 'framer-motion'

import './Estimator.css'
export const Estimator = () => {
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
            label: 'Estimator'
          }}
        />
        <div className='container__estimator'>
          <div className='client__estimator'>
            <ClientProfile />
          </div>
          <div className='share__estimator'>
            <ShareEstimator />
          </div>
          <div className='funds__estimator'>
            <Funds />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
