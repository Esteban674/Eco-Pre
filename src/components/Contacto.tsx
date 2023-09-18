import React, { useState, ChangeEvent, FormEvent } from 'react';

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const cuerpoCorreo = `
      Nombre: ${formData.nombre}
      Teléfono/Celular: ${formData.telefono}
      Correo Electrónico: ${formData.email}
      Mensaje: ${formData.mensaje}
    `;

    const asunto = "Nuevo mensaje de contacto";

    const linkCorreo = `mailto:emilianoperea10@gmail.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpoCorreo)}`;

    window.location.href = linkCorreo;
  }

  return (
    <>
      <div className='container-contacto'>
        <div className='titulo-contacto'>
          <h1>Informacion de Contacto</h1>
          <p>email@gmail.com</p>
          <p>Tel : 0357-4256734</p>
        </div>
        <div className='container-form-contacto'>
          <p>Contactanos</p>
          <form onSubmit={handleSubmit} className='form-contacto'>
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
              <textarea id="mensaje" className='areaTexto' name="mensaje"  rows={4} value={formData.mensaje} onChange={handleChange} required />
            </div>

            <button className='botonEnviar-mensaje' type="submit">Enviar Mensaje</button>
            <input type='hidden' name='_next' value='http://127.0.0.1:5173'/>
            <input type='hidden' name='_captcha' value='false'/>
          </form>
        </div>
      </div>
    </>
  )
}
