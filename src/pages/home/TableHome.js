import React from 'react'

export const TableHome = () => {
  return (
    <div>
      <div className='mt-5 pending__actions is-flex is-flex-direction-column'>
        <div className='header is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center is-text-align-center'>
          <h6 className='title has-text-black is-6 '>
            <strong>Pending Actions</strong>
          </h6>
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
      <div className='card table__header mt-6'>
        <div className='pending__table mt-3'>
          <table className='table is-fullwidth is-striped is-hoverable'>
            <thead className='table__header '>
              <tr>
                <th className='has-text-white'>Contract ID</th>
                <th className='has-text-white'>Date Modified</th>
                <th className='has-text-white'>Full Name</th>
                <th className='has-text-white'>Funds</th>
                <th className='has-text-white'>Contract Status</th>
                <th className='has-text-white'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1651561532</td>
                <td>June 2, 2022</td>
                <td>Jhon Jefferson Smith</td>
                <td>$ 1,235.15</td>
                <td>Created</td>
                <td>
                  <button className='button is-success  is-outlined'>
                    <span className='button__large'>Edit</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>2361561532</td>
                <td>June 2, 2022</td>
                <td>Jhon Douglas Jackson</td>
                <td>$ 1,456.11</td>
                <td>Signed</td>
                <td>
                  <button className='button is-success  is-outlined'>
                    <span className='button__large'>Edit</span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>1651563242</td>
                <td>June 2, 2022</td>
                <td>Jhon Junior Doe</td>
                <td>$ 2,232.05</td>
                <td>Sent to Client</td>
                <td>
                  <button className='button is-success  is-outlined'>
                    <span className='button__large'>Edit</span>
                  </button>
                </td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='mt-5'>
        <a href='/' className='has-text-primary'>
          <strong className='has-underline'>View all Actions</strong>
        </a>
      </div>
    </div>
  )
}
