import { useEffect, useState } from "react";
import { Galleria } from 'primereact/galleria';

interface Image {
  itemImageSrc: string;
  thumbnailImageSrc: string;
  alt: string;
  title: string;
}

const imagenes: Image[] = [
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755868/Web-Ecologica/Construcciones/Screenshot_20230526-110307_2_riniaj.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755910/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-110307_2_fyzxvr.png',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755017/Web-Ecologica/Construcciones/Screenshot_20230526-105820_2_lgey5x.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755340/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-105820_2_zuslzq.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755026/Web-Ecologica/Construcciones/Screenshot_20230526-110245_2_poap1n.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755339/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-110245_2_rpdxnj.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755021/Web-Ecologica/Construcciones/Screenshot_20230526-105849_2_gfovkg.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755339/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-105849_2_v3i5rr.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755020/Web-Ecologica/Construcciones/Screenshot_20230526-112103_2_i0sysp.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755340/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-112103_2_lnzvmo.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755018/Web-Ecologica/Construcciones/Screenshot_20230526-110357_2_xlv5cm.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755340/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-110357_2_aqs7jv.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755018/Web-Ecologica/Construcciones/Screenshot_20230526-110120_2_oi99cn.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755339/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-110120_2_fncqb8.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755019/Web-Ecologica/Construcciones/Screenshot_20230526-112131_2_xef69q.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755339/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-112131_2_jtrb3w.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
  {
    itemImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755020/Web-Ecologica/Construcciones/Screenshot_20230526-110321_2_fjmpw8.png',
    thumbnailImageSrc: 'https://res.cloudinary.com/dmehzrcf1/image/upload/v1690755340/Web-Ecologica/Construcciones/Mini/Screenshot_20230526-110321_2_d13xqb.png',
    alt: 'Description for Image 2',
    title: 'Title 2'
  },
];

export const Galeria = () => {
  const [images, setImages] = useState<Image[] | null>(null);


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
    setImages(imagenes);
  }, []);

  const itemTemplate = (item: Image) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
  }

  return (
    <>
    <div className="container-gallery card flex justify-content-center"> 
      {images && (
        <Galleria
          className="gallery"
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={4}
          circular
          style={{ maxWidth: '760px', minWidth: '280px' }}
          showItemNavigators
          item={itemTemplate}
      
          // thumbnailsPosition={"right"}
        />
      )}
    </div>
    </>
  )
};

