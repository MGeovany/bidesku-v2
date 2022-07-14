import React from 'react'

export const HeaderHome = () => {
  return (
    <div className='is-flex is-justify-content-space-between is-flex-wrap-wrap is-align-content-center is-text-align-center is-justify-content-center'>
      <h2 className='title has-text-black'>
        Welcome,
        <i className='has-text-primary'> Marlon Castro</i>
      </h2>
      <div className=''>
        <button className='button is-primary'>
          <strong>Start New Contract</strong>
        </button>
      </div>
    </div>
  )
}
