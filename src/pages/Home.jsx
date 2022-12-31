import React from "react"
import '../styles/Layout.css'
import Banner from '../components/Banner'
import Thumb from '../components/Thumb'
import Footer from '../components/Footer'
import Header from '../components/Header'

//import data from '../data/logements.json'; 

//data.forEach(element => console.log(element.id));

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



