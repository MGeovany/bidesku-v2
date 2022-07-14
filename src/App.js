import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Clients } from './pages/clients/Clients'
import { Estimator } from './pages/estimator/Estimator'
import { Faq } from './pages/faq/Faq'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/estimator' element={<Estimator />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
