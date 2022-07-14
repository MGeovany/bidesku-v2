/* eslint-disable react/prop-types */
import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import './Layout.css'
export const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className=''>{children}</div>
    </div>
  )
}
