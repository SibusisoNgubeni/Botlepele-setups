import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-page-container">
      
        <div className="about-page-content">
         <h1>information about botlepele setups</h1>
         <p>Our aim at <strong>Botlepele setups</strong> is to ....</p>
         <p>some more information here</p>
        </div>

        <div className="about-page-cta">
         <h2>more information<br />more information</h2>
         <Link className="link-button" to="/vans">Explore setups</Link>
         </div>
        
    </div>
        
  )
};
