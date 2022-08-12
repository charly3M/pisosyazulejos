import React from 'react'
import "../estilos/nosotros.css";
import img1 from "../images/loseta1.jpg"
import img2 from "../images/loseta2.jpg"
import { Link } from "react-router-dom";



export function Nosotros() {
  return (
    <section className="nosotros" id='servicios'>


   
<div class="contenedor">
        <img src={img1} className="img" />

        <div class="subcontenedor">
        <h1>¿Quienes Somos?</h1>
        <div class="parrafo">

             <p>
          Grupo HM quiere ser una de las firmas de instalación de pisos y azulejos más influyentes en la ciudad debido a nuestra integración de diseño. </p>
          <p>
          Nuestra filosofía es crear el producto más detallado para entregar a nuestros clientes. Cualquier instalador debería poder instalar azulejo en una casa, pero el verdadero trabajo está en el acabado y estamos dedicados a entregar el producto más fino y elegante a nuestros clientes. </p>
        </div>
       
        </div>
</div>



<div class="contenedor">
<div class="subcontenedor">
<h1>¿Por que hacemos esto?</h1>
          <div class="parrafo">

             <p>
          Grupo HM quiere ser una de las firmas de instalación de pisos y azulejos más influyentes en la ciudad debido a nuestra integración de diseño. </p>
          <p>
          Nuestra filosofía es crear el producto más detallado para entregar a nuestros clientes. Cualquier instalador debería poder instalar azulejo en una casa, pero el verdadero trabajo está en el acabado y estamos dedicados a entregar el producto más fino y elegante a nuestros clientes. </p>
       
         <Link to="/servicios" className="boton" >Nuestros trabajos</Link>
        </div>
        </div>

        <div>
<img src={img2} className="img" />
</div>

</div>



 </section>
  )
}
