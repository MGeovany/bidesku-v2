/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import { TableActions } from './TableActions'
import faker from 'faker'

export const ContractsTable = ({ label, dpdwn }) => {
  return (
    <>
      <div className='mt-5 pending__actions is-flex is-flex-direction-column'>
        <div className='header is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center is-text-align-center'>
          {label ? (
            <h6 className='title has-text-black is-6 '>
              <strong>{label}</strong>
            </h6>
          ) : (
            dpdwn
          )}
          <div className='searchbar is-flex is-flex-direction-row field is-grouped'>
            <p className='control is-expanded'>
              <input className='input' type='text' placeholder='Search' />
            </p>
            <p className='control'>
              <button className='button is-primary'>Search</button>
            </p>
          </div>
        </div>
      </div>
      <div className='card table__header mt-2'>
        <div className='pending__table mt-4'>
          <table className='table is-fullwidth is-striped is-hoverable'>
            <thead className='table__header '>
              <tr className=''>
                <th className='has-text-white'>Contract ID</th>
                <th className='has-text-white'>Date Modified</th>
                <th className='has-text-white'>Full Name</th>
                <th className='has-text-white'>Funds</th>
                <th className='has-text-white'>Contract Status</th>
                <th className='has-text-white'></th>
              </tr>
            </thead>
            <tbody>
              {
                // fake data from faker
                // eslint-disable-next-line no-plusplus
                [...Array(10)].map((_, i) => (
                  <tr key={i}>
                    <td>
                      {faker.random.number({ min: 100000, max: 10000000 })}
                    </td>
                    <td>{faker.date.recent().toLocaleDateString()}</td>
                    <td>{`${faker.name.firstName()} ${faker.name.firstName()}`}</td>
                    <td>{faker.finance.amount(0, 10000, 2, '$')}</td>
                    <td>
                      {faker.random.arrayElement([
                        'Pending',
                        'Approved',
                        'Rejected'
                      ])}
                    </td>
                    <td>
                      <button className='button is-primary is-outlined px-5'>
                        Editar
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-5'>
        <TableActions />
      </div>
    </>
  )
}
