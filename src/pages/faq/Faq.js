import React from 'react'
import { FaqDocuments } from '../../components/FaqDocuments'
import { Header } from '../../components/Header'
import { motion } from 'framer-motion'

export const Faq = () => {
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
            label: 'Frequently Asked Questions'
          }}
          buttons={[
            {
              label: 'Download All',

              onClick: () => {
                alert('hi')
              }
            },
            {
              label: 'Request Meeting',
              onClick: () => {
                alert('hi')
              }
            }
          ]}
        />
        <FaqDocuments />
      </motion.div>
    </div>
  )
}
