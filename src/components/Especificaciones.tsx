export const Especificaciones = () => {

  function condicionParaMostrarImagen1() {
    if (window.innerWidth <= 599) {
      return 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695587593/Group_12_t2kccv.png'; // Ruta de la imagen para celular
    } else {
      return 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695474446/Web-Ecologica/Construcciones/C%C3%ADrculo_completo_final_tzfe9j.png'; // Ruta de la imagen para pantallas grandes
    }
  }

  function condicionParaMostrarImagen2() {
    if (window.innerWidth <= 599) {
      return 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695587654/Frame_7_mfecot.png'; // Ruta de la imagen para celular
    } else {
      return 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695474454/Web-Ecologica/Construcciones/Ventajas_xcfbyd.png'; // Ruta de la imagen para pantallas grandes
    }
  }

  
  return (
    <>
      <section className="section-dark">
        <div className="card-container">
          <div className="card-img contenedor-imagen">
          <h2 className="card-title pb-5 pt-0">Ladrillos ecologicos premoldeados Eco-Pre</h2>
          <img src={condicionParaMostrarImagen1()} alt="Imagen" />
          </div>
        </div>
      </section>
      <section className="section-light">
      <div className="card-container">
          <div className="card-img contenedor-imagen2">
          <img src={condicionParaMostrarImagen2()} alt="Imagen" />
          </div>
        </div>
      </section>
    </>
  )
}