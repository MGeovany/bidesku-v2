import React from 'react'
import { ClientProfile } from '../../components/ClientProfile'
import { Funds } from '../../components/Funds'
import { Header } from '../../components/Header'
import { ShareEstimator } from '../../components/ShareEstimator'

import './Estimator.css'
export const Estimator = () => {
  return (
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
  )
}
