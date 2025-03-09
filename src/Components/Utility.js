import React, { useEffect } from 'react'
import UtilOptions from './UtilOptions'
import Navbar from './Navbar'
import PayBillForm from './PayBillForm'
import CallToAction from './CallToAction'
import Footer from './Footer'

export const Utility = () => {
  useEffect(()=>{
     document.title="MercantilePay - Utility Bills"
  })
  return (
<>
<Navbar/>
<UtilOptions/>
<PayBillForm/>
<CallToAction/>
<Footer/>



</>
  )
}
