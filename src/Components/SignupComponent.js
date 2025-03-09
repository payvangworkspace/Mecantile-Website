import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import CallToAction from './CallToAction'
import Footer from './Footer'

export const SignupComponent = () => {
  useEffect(()=>{
     document.title="MercantilePay - SignUp"
  })
  return (
    <>
    <Navbar/>
    <Signup/>
    <CallToAction/>
    <Footer/>


    </>
  )
}
