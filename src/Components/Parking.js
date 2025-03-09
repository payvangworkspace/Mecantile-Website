import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ParkingPayment from './ParkingPayment'
import CallToAction from './CallToAction'
import Footer from './Footer'

export const Parking = () => {
  useEffect(()=>{

 document.title="MercantilePay - Parking Payments"

  })
  return (
  <>
  <Navbar/>
  <ParkingPayment/>
  <CallToAction/>
  <Footer/>
  
  
  </>
  )
}
