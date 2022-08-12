import React from 'react'
import "../estilos/servicios.css";
import { Slide } from "./Slide";
import img1 from "../images/trabajo1.jpg";
import img2 from "../images/trabajo2.jpg";
import img3 from "../images/trabajo3.jpg";
import img4 from "../images/trabajo4.jpg";



export function Servicios() {
  let slides = [
    <img  src={img1} alt="1" />,
    <img  src={img2} alt="2" />  ,
    <img  src={img3} alt="3" />  ,
    <img  src={img4} alt="4" />  ,
    <img src={img2} alt="5" />   ];

const callback = function(index){
    console.log("callback",index);
}
  return (
    <div className="servicios">
      <h1 className='titularservicios'>Nuestros trabajos</h1>
      <Slide slides={slides} autoplay={true} interval={10000} onSlideChange={callback}></Slide>
    </div>
  )
}
