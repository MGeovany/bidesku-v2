import React from 'react'
import { FaqDocuments } from '../../components/FaqDocuments'
import { Header } from '../../components/Header'

export const Faq = () => {
  return (
    <div className='container is-flex is-flex-direction-column'>
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
    </div>
  )
}
