import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Emp_form from './components/Emp_form'

function App() {
 

  return (
    <>
     <Routes>
    <Route path='/' element={<Home/>}>Home</Route>
    <Route path='/form' element={<Emp_form/>}>Employee Form</Route>
  
   </Routes>
    </>
  )
}

export default App
