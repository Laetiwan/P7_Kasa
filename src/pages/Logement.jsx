import React from "react"
import Header from '../components/Header'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'
import Tag from '../components/Tag'
import Rating from '../components/Rating'
import { useParams } from "react-router-dom"
import data from '../data/logements.json'
import '../styles/Logement.css'
import CollapseEquip from '../components/CollapseEquip'

function Logement() {
  
  const params = useParams()
  const appartement = data.find(appart => appart.id === params.id)
      
  return (
    <div>
      <Header />
      <div className="containerStyles">
        <Slideshow slides={appartement.pictures} />        
      </div>
      <div className="containerInfoStyles">
        <div className="containerInfoStylesL">
          <h3 className='titreText'>{appartement.title}</h3>            
          <p className='soustitreText'>{appartement.location}</p>
          <Tag tag={appartement.tags} />
        </div>
        <div className="containerInfoStylesR">
          <div className='container-host'>
              <h5 className="name-host">{appartement.host.name}</h5> 
              <img src={appartement.host.picture} alt="img-host" className='img-host' />            
          </div>
          <Rating rating={appartement.rating}/>          
        </div>               
      </div>
      <div className="containerInfoStylesCollapse">
        <div className="containerInfoStylesCollapseIn">
          <Collapse title="Description" description={appartement.description}/>
        </div>
        <div className="containerInfoStylesCollapseIn">
          <CollapseEquip title="Équipement" description={appartement.equipments}/>
        </div>
      </div>      
      <Footer />   
    </div>    
  )
}

export default Logement



