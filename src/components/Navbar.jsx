import React from 'react'
import { Link } from 'react-router-dom'


/**
 * Initially imported { Home } and { About } on Navbar.jsx and realised that 
   import About from "./pages/About" imports the About component into your file to be used,
   and Link component only handles the routing logic and creates a link to the "/about" || "/Home" path
   and doesn't automatically use or render the component associated with that path
*/


const Navbar = () => {
  return (
    <header>
    
    <Link className="site-logo" to="/">
        <img className="logo" src="/Assets/logo.png" />
      </Link>

    <nav>
      <Link to= "/setupsPage">Setups</Link>
      <Link to="/Home">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
  )
}

export default Navbar


