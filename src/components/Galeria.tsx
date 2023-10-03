import { useEffect, useState } from "react";
import { Galleria } from 'primereact/galleria';

interface Image {
  itemImageSrc: string;
  alt: string;
  title: string;
}

const imagenes1: Image[] = [
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227440/Web-Ecologica/Construcciones/Foto_5_modificada_2x_1_a9utbh.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227476/Web-Ecologica/Construcciones/Vivienda_peyid8.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227464/Web-Ecologica/Construcciones/Foto_7_modificada_2x_1_ut5fox.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227425/Web-Ecologica/Construcciones/Foto_4_Modificada_1_vffc71.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227394/Web-Ecologica/Construcciones/Foto_2_MODIFICADA_1_flwrlc.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1695227383/Web-Ecologica/Construcciones/Foto_1_MODIFICADA_Con_libustro_1_to4vma.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125800/Eco-Pre/imagenes%20livianas/img5_dxhp5q.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125796/Eco-Pre/imagenes%20livianas/img14_me4j9q.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
];

const imagenes2: Image[] = [
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125796/Eco-Pre/imagenes%20livianas/img19_gujwap.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125794/Eco-Pre/imagenes%20livianas/img10_oopdye.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125801/Eco-Pre/imagenes%20livianas/img7_bstx7i.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125800/Eco-Pre/imagenes%20livianas/img34_axgvsz.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125798/Eco-Pre/imagenes%20livianas/img24_qpkuq8.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125798/Eco-Pre/imagenes%20livianas/img27_lwhqln.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125797/Eco-Pre/imagenes%20livianas/img21_zl9xl0.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125797/Eco-Pre/imagenes%20livianas/img22_oia88t.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125796/Eco-Pre/imagenes%20livianas/img16_xxtho6.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125801/Eco-Pre/imagenes%20livianas/img8_dqwjpo.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/duqilis2i/image/upload/v1695125799/Eco-Pre/imagenes%20livianas/img3_hhiadp.jpg',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
];

export const Galeria = () => {
  const [images1, setImages1] = useState<Image[] | null>(null);
  const [images2, setImages2] = useState<Image[] | null>(null);


  const responsiveOptions = [
    {
      breakpoint: '991px',
      numVisible: 4
    },
    {
      breakpoint: '767px',
      numVisible: 3
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];

  useEffect(() => {
    setImages1(imagenes1);
    setImages2(imagenes2);
  }, []);

  const itemTemplate = (item: Image) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
  }

  return (
    <>
    <div className="container-gallery card flex flex-column justify-content-center align-items-center">
    <h2 className="titulo-galeria text-center m-0 pt-3">Obras terminadas</h2>
        {images1 && (
          <Galleria
            className="gallery"
            value={images1}
            responsiveOptions={responsiveOptions}
            numVisible={4}
            circular
            style={{ maxWidth: '960px', minWidth: '280px' }}
            showItemNavigators
            item={itemTemplate}
            title="Obras Terminadas"
          />
        )}
      </div>
      <div className="container-gallery card flex flex-column justify-content-center align-items-center">
      <h2 className="titulo-galeria text-center m-0 pt-3">Obras en construcción</h2>
        {images2 && (
          <Galleria
            className="gallery"
            value={images2}
            responsiveOptions={responsiveOptions}
            numVisible={4}
            circular
            style={{ maxWidth: '960px', minWidth: '280px' }}
            showItemNavigators
            item={itemTemplate}
            title="Construcciones"
          />
        )}
      </div>
    </>
  )
};

