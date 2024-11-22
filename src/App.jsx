import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './pages/About'

const App = () => {
  return (
    <>

    <Header />
    <Routes>
      <Route path='/' element />
      <Route path='/about' element={<About />} />
    </Routes>



    <Footer />
    </>
  )
}

export default App