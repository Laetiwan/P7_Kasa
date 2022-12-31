import React from "react"
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Erreur.css'
import Footer from '../components/Footer'

function Erreur() {
  return (
    <div>
      <Header />
      <p className="no_404">404</p>
      <p className="text_404">Oups ! La page que vous demandez n'existe pas.</p>
      <p className="link_404"><Link to="/">Retourner sur la page d'accueil</Link></p>
      <Footer />
    </div>
  )
}

export default Erreur

