/* eslint-disable react/prop-types */
import React from 'react'

export const Header = ({ legend, buttons }) => {
  return (
    <>
      <div className='is-flex is-justify-content-space-between is-flex-wrap-wrap is-align-content-center is-text-align-center is-justify-content-center'>
        <h2 className='title has-text-black'>
          {legend.label}
          <i className='has-text-primary'>{legend.user}</i>
        </h2>
        <div className=''>
          {buttons?.map((btn, i) => (
            <button
              className={`button is-primary ml-2 ${i === 0 && 'is-outlined'}`}
              onClick={btn.onClick}
              key={i}
            >
              <strong>{btn.label}</strong>
            </button>
          ))}
        </div>
      </div>
      <hr />
    </>
  )
}
