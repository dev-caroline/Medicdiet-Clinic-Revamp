import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element = {<LandingPage/>}/>
        <Route path='/form' element = {<FormPage/>} />
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </HelmetProvider>
  )
}

export default App