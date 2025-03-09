import React, { useEffect } from 'react'
import PaymentSolution from './PaymentSolution'
import PaymentOptions from './PaymentOptions'
import ModernServices from './ModernServices'
import CallToAction from './CallToAction'
import Navbar from './Navbar'
import Footer from './Footer'

export const Home = () => {

  useEffect(()=>{
    document.title="MercantilePay - Home"
  })


  return (
 <>
 <Navbar/>
 <PaymentSolution/>
     <PaymentOptions/>
     <ModernServices/>
     <CallToAction/>
  <Footer/>
</>
  )
}
