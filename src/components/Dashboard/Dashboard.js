import React from 'react'
import './Dashboard.css'

export const Dashboard = () => {
  return (
    <>
      <div className='header'></div>
      <input type='checkbox' className='openSidebarMenu' id='openSidebarMenu' />
      <label htmlFor='openSidebarMenu' className='sidebarIconToggle'>
        <div className='spinner diagonal part-1'></div>
        <div className='spinner horizontal'></div>
        <div className='spinner diagonal part-2'></div>
      </label>
      <div id='sidebarMenu'>
        <ul className='sidebarMenuInner'>
          <li>
            Jelena Jovanovic <span>Web Developer</span>
          </li>
          <li>
            <a href='https://vanila.io' target='_blank' rel='noreferrer'>
              Company
            </a>
          </li>
          <li>
            <a
              href='https://instagram.com/plavookac'
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/plavookac'
              target='_blank'
              rel='noreferrer'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg'
              target='_blank'
              rel='noreferrer'
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/plavookac/'
              target='_blank'
              rel='noreferrer'
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
      <div id='center' className='main center'>
        <div className='mainInner'>
          <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
        <div className='mainInner'>
          <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
        <div className='mainInner'>
          <div>PURE CSS SIDEBAR TOGGLE MENU</div>
        </div>
      </div>
    </>
  )
}
