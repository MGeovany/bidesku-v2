import React, { useState } from 'react'

export const TableActions = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className={isOpen ? 'is-hidden' : null}>
        <a className='has-text-primary' onClick={handleOpen}>
          <strong>View all Actions</strong>
        </a>
      </div>

      <div className={isOpen ? null : 'is-hidden'}>
        <div className='is-size-7 is-flex is-flex-direction-row is-justify-content-space-between'>
          <div>
            <ul className='is-flex is-flex-direction-row '>
              <li>
                <a className='has-text-primary '>
                  <strong>First Page</strong>
                </a>
              </li>
              <li>
                <a className='has-text-primary px-4'>
                  <strong>Previous Page</strong>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <nav
              className='pagination'
              role='navigation'
              aria-label='pagination'
            >
              <ul className='pagination-list'>
                <li>
                  <button
                    className='pagination-link is-current has-background-primary is-rounded'
                    aria-label='Page 1'
                    aria-current='page'
                  >
                    1
                  </button>
                </li>
                <li>
                  <a className='pagination-link' aria-label='Goto page 2'>
                    2
                  </a>
                </li>
                <li>
                  <a className='pagination-link' aria-label='Goto page 3'>
                    3
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <ul className='is-flex is-flex-direction-row'>
              <li>
                <a className='has-text-primary px-4'>
                  <strong>Next Page</strong>
                </a>
              </li>
              <li>
                <a className='has-text-primary'>
                  <strong>Last Page</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
