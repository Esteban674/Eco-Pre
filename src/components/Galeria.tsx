export const Galeria = () => {
  interface Image {
    itemImageSrc: string;
    alt: string;
    title: string;
  }

  const imagenes1: Image[] = [
    {
      itemImageSrc:
        "https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227440/Web-Ecologica/Construcciones/Foto_5_modificada_2x_1_a9utbh.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227476/Web-Ecologica/Construcciones/Vivienda_peyid8.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227464/Web-Ecologica/Construcciones/Foto_7_modificada_2x_1_ut5fox.jpg",
      alt: "Description for Image 3",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227425/Web-Ecologica/Construcciones/Foto_4_Modificada_1_vffc71.jpg",
      alt: "Description for Image 4",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227394/Web-Ecologica/Construcciones/Foto_2_MODIFICADA_1_flwrlc.jpg",
      alt: "Description for Image 5",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227383/Web-Ecologica/Construcciones/Foto_1_MODIFICADA_Con_libustro_1_to4vma.jpg",
      alt: "Description for Image 6",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125800/Eco-Pre/imagenes%20livianas/img5_dxhp5q.jpg",
      alt: "Description for Image 7",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125796/Eco-Pre/imagenes%20livianas/img14_me4j9q.jpg",
      alt: "Description for Image 8",
      title: "Title 2",
    },
  ];

  const imagenes2: Image[] = [
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125796/Eco-Pre/imagenes%20livianas/img19_gujwap.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125794/Eco-Pre/imagenes%20livianas/img10_oopdye.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125801/Eco-Pre/imagenes%20livianas/img7_bstx7i.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125800/Eco-Pre/imagenes%20livianas/img34_axgvsz.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125798/Eco-Pre/imagenes%20livianas/img24_qpkuq8.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125798/Eco-Pre/imagenes%20livianas/img27_lwhqln.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125797/Eco-Pre/imagenes%20livianas/img21_zl9xl0.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125797/Eco-Pre/imagenes%20livianas/img22_oia88t.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125796/Eco-Pre/imagenes%20livianas/img16_xxtho6.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125801/Eco-Pre/imagenes%20livianas/img8_dqwjpo.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc:
        "https://res.cloudinary.com/duqilis2i/image/upload/v1695125799/Eco-Pre/imagenes%20livianas/img3_hhiadp.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
  ];

  return (
    <div className="container-galleries">
      <div className="group-gallery1">
        <h1>Obras terminadas</h1>
        <div className="container-gallery1">
          <div className="gallery">
            <a
              href={imagenes1[0].itemImageSrc}
              data-lightbox="obras"
              data-title=""
            >
              <img src={imagenes1[0].itemImageSrc} alt={imagenes1[0].alt} />
            </a>
            <a
              href={imagenes1[1].itemImageSrc}
              data-lightbox="obras"
              data-title=""
            >
              <img src={imagenes1[1].itemImageSrc} alt={imagenes1[1].alt} />
            </a>
            <a
              href={imagenes1[2].itemImageSrc}
              data-lightbox="obras"
              data-title=""
            >
              <img src={imagenes1[2].itemImageSrc} alt={imagenes1[2].alt} />
            </a>
            <a
              href={imagenes1[3].itemImageSrc}
              data-lightbox="obras"
              data-title=""
            >
              <img src={imagenes1[3].itemImageSrc} alt={imagenes1[3].alt} />
            </a>
            <a
              href={imagenes1[4].itemImageSrc}
              data-lightbox="obras"
              data-title=""
            >
              <img src={imagenes1[4].itemImageSrc} alt={imagenes1[4].alt} />
            </a>
            <a
              href={imagenes1[5].itemImageSrc}
              data-lightbox="obras"
              data-title=""
            >
              <img src={imagenes1[5].itemImageSrc} alt={imagenes1[5].alt} />
            </a>
            <a
              href={imagenes1[6].itemImageSrc}
              data-lightbox="obras"
              data-title=""
            >
              <img src={imagenes1[6].itemImageSrc} alt={imagenes1[6].alt} />
            </a>
            <a
              href={imagenes1[7].itemImageSrc}
              data-lightbox="obras"
              data-title=""
            >
              <img src={imagenes1[7].itemImageSrc} alt={imagenes1[7].alt} />
            </a>
          </div>
        </div>
      </div>
      <div className="group-gallery2">
        <h1>Obras en construcción</h1>
        <div className="container-gallery2">
          <div className="gallery">
            <a
              href={imagenes2[0].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[0].itemImageSrc} alt={imagenes2[0].alt} />
            </a>
            <a
              href={imagenes2[1].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[1].itemImageSrc} alt={imagenes2[1].alt} />
            </a>
            <a
              href={imagenes2[2].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[2].itemImageSrc} alt={imagenes2[2].alt} />
            </a>
            <a
              href={imagenes2[3].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[3].itemImageSrc} alt={imagenes2[3].alt} />
            </a>
            <a
              href={imagenes2[4].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[4].itemImageSrc} alt={imagenes2[4].alt} />
            </a>
            <a
              href={imagenes2[5].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[5].itemImageSrc} alt={imagenes2[5].alt} />
            </a>
            <a
              href={imagenes2[6].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[6].itemImageSrc} alt={imagenes2[6].alt} />
            </a>
            <a
              href={imagenes2[7].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[7].itemImageSrc} alt={imagenes2[7].alt} />
            </a>
            <a
              href={imagenes2[8].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[8].itemImageSrc} alt={imagenes2[8].alt} />
            </a>
            <a
              href={imagenes2[9].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[9].itemImageSrc} alt={imagenes2[9].alt} />
            </a>
            <a
              href={imagenes2[10].itemImageSrc}
              data-lightbox="obras2"
              data-title=""
            >
              <img src={imagenes2[10].itemImageSrc} alt={imagenes2[10].alt} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
