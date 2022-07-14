import React from 'react'

export const Graphics = () => {
  return (
    <div>
      <div className='is-flex is-flex-direction-row'>
        <div className='graph__container'>
          <div className='box'>
            <div className='box__content'>Box1</div>
          </div>
        </div>
        <div className='graph__container'>
          <div className='box'>
            <div className='box__content'>Box2</div>
          </div>
        </div>
      </div>
    </div>
  )
}
