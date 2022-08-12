import React, {useState} from 'react'
import { Link } from "react-router-dom";

import { Servicios } from "./Servicios";
import { Nosotros } from "./Nosotros";
import { Contactanos } from "./Contactanos";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";




import { Home } from "./Home";
 import whats  from "../images/WhatsApp.png";


import '../estilos/Navbar.css';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";



export function Navbar() {
  const [mostrarmenu, setMostrarmenu]= useState(true);
  const [movil, setMovil]= useState(false);
  

  const cambio = ()=>{
    console.log(mostrarmenu);

    setMovil(true);
    if (mostrarmenu){
      document.getElementById("nav").style.display="block";
      setMostrarmenu(!mostrarmenu);
  
    }else
    document.getElementById("nav").style.display="none"; 
    setMostrarmenu(!mostrarmenu);
  }

  const cerrar=()=>{
    if(movil){
      document.getElementById("nav").style.display="none"; 
      setMostrarmenu(!mostrarmenu);
    }
  }
  

  return (
    <Router>
     {/* <Fragment>  */}

   <header>
    <div className="menu">


    <div className="logo">
        <div className="imagen"></div>
        <div className="letras">H <span className='segunda'>M</span></div>
    </div>
    
      
    
    <nav className='nav' id='nav'>
      <ul className='nav-links'>
            <li><Link to="/" className="opcion" onClick={cerrar}>Inicio</Link></li> 
            <li><Link to="/nosotros" className="opcion" onClick={cerrar} >Nosotros</Link></li> 
            <li><Link to="/servicios" className="opcion" onClick={cerrar} >Trabajos</Link></li>            
            <li> <Link to="/contactanos" className="opcion" onClick={cerrar} >Contactanos</Link></li>
        </ul>
    </nav>
        
    <div className='contenedoricono' onClick={cambio}>
      <FontAwesomeIcon icon={faAlignRight} className="iconmenu" />
    </div>
    </div>
    <Routes>       
        <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
        <Route path='/servicios' element={<Servicios></Servicios>}></Route>
        <Route path='/contactanos' element={<Contactanos></Contactanos>}></Route>
        
         
    </Routes> 
    <a href="https://wa.me/4492839928" > <img  src={whats} className='whatsapp'/> </a>
   </header>


 </Router> 
  )
}
