import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <div className="home-container">
      
     <h1>information you want your customers to see when they land on the website</h1>
     <p>more information</p>
     <Link to="setups">go to setups</Link>
    </div>
  )
};
