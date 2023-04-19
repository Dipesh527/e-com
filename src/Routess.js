import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './component/About'
import Cart from './component/Cart'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Products from './page/Products'
import Register from './page/Register'
import SignIn from './page/SignIn'
import Home from './page/Home'
import UseState from './component/UseState'
import UseStates1 from './component/UseStates1'
import Data from './page/props/Data'
import Display1 from './page/fetch/Display1'
import Display2 from './page/axios/Display2'
import Users from './page/jasonapis/Users'
import Cart3 from './page/axios/Cart3'
import Todos from './page/todos/Todos'

const Routess = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/nav' element={<Navbar/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/footer' element= {<Footer/>} />
        <Route path='/products' element= {<Products/>} />
        <Route path='/signin' element= {<SignIn/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='/cart' element= {<Cart/>} />
        <Route path='/' element= {<Home/>} />
        <Route path='/usestate' element= {<UseState/>} />
        <Route path='/usestate1' element= {<UseStates1/>} />
        <Route path='/data' element= {<Data/>} />
        <Route path='/fetch' element= {<Display1/>} />
        <Route path='/axios' element= {<Display2/>} />
        <Route path='/users' element= {<Users/>} />
        <Route path='/product/:id' element= {<Cart3/>} />
        <Route path='/todos' element= {<Todos/>} />



      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default Routess