import React from 'react'
import './styles/Sidebar.css'
import { Link } from 'react-router-dom'
// This is the component that will be rendered in the sidebar.
// This component is buit with Bulma.

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='menu-container px-1 has-background-black-ter'>
        <p className='title'>
          <img src='/bideskutext.png' alt='logo' />
        </p>
        <div className='menu-wrapper'>
          <aside className='menu'>
            <p className='menu-label'>PROFESSIONAL GRAPHIC DESIGN</p>
            <ul className='menu-list'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/clients'>Clients</Link>
              </li>
              <li>
                <Link to='/estimator'>Estimator</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  )
}
