import React, { useEffect } from 'react'
import Navbar from './Navbar'
import PayBill from './PayBill'
import CallToAction from './CallToAction'
import Footer from './Footer'

export const School = () => {
  useEffect(()=>{
     document.title="MercantilePay - School Fee"
  })
  return (
  <>
<Navbar/>
<PayBill/>
<CallToAction/>
<Footer/>
  </>
  )
}
