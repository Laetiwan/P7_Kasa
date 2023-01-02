import React from "react"
import '../styles/Layout.css'
import Banner from '../components/Banner'
import Thumb from '../components/Thumb'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header />
      <Banner />          
      <Thumb />
      <Footer />  
    </div>    
  )
}

export default Home



