import React from 'react'
import "../estilos/contactanos.css"
import emailjs from "emailjs-com";

export function Contactanos() {

    const enviarEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_uo7lgye','template_y6l3xxj',e.target,'K6pEstddoqs37AaRH').then(res=>{
            alert("Se ha enviado correctamente");
        })
    }
  return (
   <div className="contactanos">
    {/* <h1>Contactanos</h1>
    <form onSubmit={enviarEmail}>
        <div className="formgrup">
            <label htmlFor="">Nombre</label>
            <input type="text" id='nombre' name='nombre' />
        </div>

        <div className="formgrup">
            <label htmlFor="">Email</label>
            <input type="text" id='email' name='email' />
        </div>

        <div className="formgrup">
            <label htmlFor="">Mensaje</label>
            <input type="text" id='mensaje' name='mensaje' />
        </div>

        <button type='submit'> Enviar correo </button>
    </form>
    <br></br> */}

    <form class="form" onSubmit={enviarEmail}>
  <h2 className='contact'>CONTACTANOS</h2>
  <p type="Nombre:"><input placeholder="Escriba su nombre aqui.." required></input></p>
  <p type="Correo:"><input placeholder="Escriba su correo en esta parte.." required></input></p>
  <p type="Mensaje:"><input placeholder="Como le gustaria que le ayudaramos.." required></input></p>
  <button type='submit'>Enviar mensaje</button>
  <div className='div'>
    <span class="fa fa-phone"></span>449 283 9928
    <span class="fa fa-envelope-o"></span> grupohm@company.com
  </div>
</form>
   </div>
  )
}
