import React from 'react'
import { Graphics } from './Graphics'
import { HeaderHome } from './HeaderHome'
import './Home.css'
import { TableHome } from './TableHome'
export const Home = () => {
  return (
    <div className='container is-flex is-flex-direction-column'>
      <HeaderHome />
      <hr />
      <Graphics />
      <TableHome />
    </div>
  )
}
