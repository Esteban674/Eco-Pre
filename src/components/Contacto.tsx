import React, { useState, ChangeEvent, useRef, } from 'react';
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';


export const Contacto: React.FC = () => {
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_iiy58th', 'template_yfaona8', form.current!, 'rKkU6lrPzIriRSrDA')
      .then((result) => {
        console.log(result.text);
        setMensajeEnviado(true);
          setTimeout(() => {  
          navigate('/');
        }, 2000);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className='container-contacto'>
        <div className='titulo-contacto'>
          <h1>Información de contacto</h1>
          <p className='m-0 p-0'>E-mail</p>
          <p className='m-0 p-0 pt-1 pb-4'><strong>ecoprecba@gmail.com</strong></p>
          <p className='m-0 p-0'>Teléfonos</p>
          <p className='m-0 p-0 pt-1 pb-1'><strong>+54 9 3572 44-2530</strong></p>
          <p className='m-0 p-0'><strong>+54 9 3875 67-0411</strong></p>
        </div>
        <div className='container-form-contacto'>
          <p>Contáctanos</p>
          <form className='form-contacto' ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="telefono">Teléfono/Celular:</label>
              <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} required />
            </div>

            <div>
              <label htmlFor="email">Correo Electrónico:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" className='areaTexto' name="mensaje" rows={4} value={formData.mensaje} onChange={handleChange} required />
            </div>

            <button className='botonEnviar-mensaje' type="submit"> {mensajeEnviado ? 'Mensaje Enviado' : 'Enviar Mensaje'}</button>
            
          </form>
        </div>
      </div>
    </>
  );
}