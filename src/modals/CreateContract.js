/* eslint-disable react/prop-types */
import React from 'react'
import { motion } from 'framer-motion'

export const CreateContract = ({ toggleModal, isModalOpen }) => {
  return (
    <div>
      <div className={`modal ${isModalOpen ? 'is-active' : null}`}>
        <div className='modal-background' onClick={toggleModal}></div>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className='modal-content'>
            <div className='box'>
              <div className='content'>
                <h1 className='title is-3'>Start New Contract 🚀</h1>
                <hr />
                <div className='field'>
                  <label className='label'>Contract Name</label>
                  <div className='control'>
                    <input
                      className='input'
                      type='text'
                      placeholder='i.e Jhon Doe'
                    />
                    <button
                      className='button is-success my-4 mr-4 px-6'
                      onClick={toggleModal}
                    >
                      Submit
                    </button>
                    <button
                      className='button is-danger my-4 px-6'
                      onClick={toggleModal}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className='modal-close is-large'
            aria-label='close'
            onClick={toggleModal}
          ></button>
        </motion.div>
      </div>
    </div>
  )
}
