import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import { Route, Routes } from 'react-router-dom'
import About from './Component/About/About'
import Login from './Component/Login/Login'
import Footer from './Component/Footer/Footer'


const App = () => {
  
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/login' element={ <Login/> }/>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
       <Footer/>
    </div>
  )
}

export default App
