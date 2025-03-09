import React, { useEffect } from 'react'
import Navbar from './Navbar'
import ContactForm from './ContactForm'
import ContactFields from './ContactFields'
import CallToAction from './CallToAction'
import Footer from './Footer'

export const Contact = () => {
  useEffect(()=>{

 document.title="MercantilePay - ContactUs"

  })
  return (
 <>
<Navbar/>
<ContactForm/>
<ContactFields/>
<CallToAction/>
<Footer/>


 </>
  )
}
