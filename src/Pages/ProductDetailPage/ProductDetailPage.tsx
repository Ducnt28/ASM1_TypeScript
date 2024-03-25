import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instace from '~/Apis'
import { Tproduct } from '~/interfaces/Tproduct'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface Props {
  
}

const ProductDetailPage = (props: Props) => {
  const[productDetail,setproductDetail] = useState<Tproduct |null>(null)
  const {id} = useParams()
  useEffect(() => {
    (async() => {
      const {data} = await instace.get<Tproduct>(`/products/${id}`)
      setproductDetail(data)
    })()
  },[id])

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="productDetail">
      <div className="box-left">
        <Slider {...settings}>
          {productDetail?.images.map((image,index) => (
              <img src={image}  key={index} />
            ))}
        </Slider>
      </div>
      <div className="box-right">
       <h3 className="title">{productDetail?.title}</h3>
       <h3 className="price">{productDetail?.price}</h3>
      <span className='desc'>{productDetail?.description}</span>
      </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
             