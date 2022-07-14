import React, { useState } from 'react'

export const DropdowContracts = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('Showing first 100')
  const handledrop = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (e) => {
    setSelected(e.target.innerText)
    setIsOpen(false)
  }
  return (
    <div
      className={`dropdown ${isOpen ? 'is-active' : null}`}
      onClick={handledrop}
    >
      <div className='dropdown-trigger'>
        <button
          className='button'
          aria-haspopup='true'
          aria-controls='dropdown-menu3'
        >
          <span>{selected} ↓</span>
        </button>
      </div>
      <div className='dropdown-menu' id='dropdown-menu3' role='menu'>
        <div className='dropdown-content'>
          <a href='#' className='dropdown-item' onClick={handleSelect}>
            Showing first 100
          </a>
          <a href='#' className='dropdown-item' onClick={handleSelect}>
            Showing first 200
          </a>
          <a href='#' className='dropdown-item' onClick={handleSelect}>
            Showing first 300
          </a>
          <a href='#' className='dropdown-item' onClick={handleSelect}>
            Showing first 400
          </a>
          <a href='#' className='dropdown-item' onClick={handleSelect}>
            Showing first 500
          </a>
        </div>
      </div>
    </div>
  )
}
