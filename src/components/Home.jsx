import React from 'react'
import "../estilos/home.css";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="home">
        <h1 className='titularhome'> Grupo H M</h1>
        <h2> Instalación de pisos & azulejos</h2>
        {/* <a href="#servicios" className='boton'>Ver nuestros trabajos</a> */}
        <Link to="/servicios" className="boton" >Ver nuestros trabajos</Link>

    </section>
  )
}
