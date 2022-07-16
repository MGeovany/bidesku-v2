/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'framer-motion'

export const Header = ({ legend, buttons }) => {
  return (
    <>
      <div className='is-flex is-justify-content-space-between is-flex-wrap-wrap is-align-content-center is-text-align-center is-justify-content-center'>
        <h2 className='title has-text-black'>
          {legend.label}
          <i className='has-text-primary'>{legend.user}</i>
        </h2>
        <div className='is-flex is-flex-direction-row'>
          {buttons?.map((btn, i) => (
            <motion.div key={i} whileTap={{ scale: 0.8 }}>
              <button
                className={`button is-primary ml-2 ${i === 1 && 'is-outlined'}`}
                onClick={btn.onClick}
              >
                <strong>{btn.label}</strong>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <hr />
    </>
  )
}
