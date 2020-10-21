import React from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Service from './Service';


const NavMenu = ()=>{



  return(
    <Router>
    <div className='navbar'>
      <ul>
        <li><Link to="/" style={{ textDecoration: 'none',margin: '15px' }}>Home</Link></li>
        <li><Link to="about-us" style={{ textDecoration: 'none',margin: '15px' }}>About us</Link></li>
        <li><Link to="services" style={{ textDecoration: 'none',margin: '15px' }}>Services</Link></li>
        <li><Link to="contact-us" style={{ textDecoration: 'none',margin: '15px' }}>Contact Us</Link></li>

       
    </ul>
   
    </div>
    <div className="main">
    
    <Route exact path="/"><Home/></Route>
    <Route path="/services/:id"><Services/></Route>
    <Route path="/service"><Service/></Route>
   

    </div>
    </Router>
  )
}

export default NavMenu;