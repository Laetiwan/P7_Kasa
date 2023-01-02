import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Erreur from './pages/Erreur'
import Logement from './pages/Logement'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </Router>
    </React.StrictMode>
)

