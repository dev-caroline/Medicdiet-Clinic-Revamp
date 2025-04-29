import React from 'react'
import { Routes, Route, Form } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element = {<LandingPage/>}/>
      <Route path='/form' element = {<FormPage/>} />
      <Route path='*' element = {<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
