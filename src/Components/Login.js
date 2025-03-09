import React, { useEffect } from 'react'
import Navbar from './Navbar'
import LoginForm from './LoginForm'
import CallToAction from './CallToAction'
import Footer from './Footer'

export const Login = () => {
  useEffect(()=>{
     document.title="MercantilePay - Login"
  })
  return (
   <>
   <Navbar/>
   <LoginForm/>
   <CallToAction/>
   <Footer/>
   </>
  )
}
