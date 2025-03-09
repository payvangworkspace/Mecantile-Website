import React from 'react'
import PaymentSolution from './PaymentSolution'
import PaymentOptions from './PaymentOptions'
import ModernServices from './ModernServices'
import CallToAction from './CallToAction'
import Navbar from './Navbar'
import Footer from './Footer'

export const Home = () => {
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
