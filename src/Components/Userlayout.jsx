import React from 'react'
import { Header } from './Header/Header'
import Footer from './Footer/Footer'

const Userlayout = ({ children }) => {
  return (
    <>
 <Header/>
 <main>{children}</main>
 <Footer/>

    </>
 
  )
}

export default Userlayout