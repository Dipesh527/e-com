import React from 'react'
import Footer from '../component/Footer'
import Carousel from '../component/Carousel'
import Navbar from '../component/Navbar'
import "../mystyle.css"
import Prudct from '../component/Prudct'

const home = () => {
  return (
    <>
   <Navbar/>
   <Carousel/>
   <Prudct/>
   <Footer/>
    
    </>
  )
}

export default home