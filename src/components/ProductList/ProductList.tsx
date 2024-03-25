import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instace from '~/Apis'
import { Tproduct } from '~/interfaces/Tproduct'

interface Props {}

const ProductList = (props: Props) => {
  const [ProductList, setProduct] = useState<Tproduct[]>([])
  useEffect(() => {
    ;(async () => {
      const { data } = await instace.get<Tproduct[]>('/products')
      setProduct(data)
    })()
  }, [])
  return (
    <>
      {/* <div className="Product_List">
        {ProductList.map((product,index) => (
          <div className="item_product" key={index + 1}>
            <Link to={`/${product.id}`}><img src={product.images[0]} alt="" /></Link>
            <Link to={`/${product.id}`}><h2>{product.title}</h2></Link>
            <h3>{product.price}</h3>
          </div>
        ))}
      </div> */}
      <div className='row'>
      {ProductList.map((product,index) => (
        <div className="col-3">
        <div className='card' key={index} style={{ width: '18rem' }}>
          <Link  to={`/${product.id}`}><img className='card-img-top ' src={product.images[0]} alt="" /></Link>
          <div className='card-body'>
            <Link to={`/${product.id}`}><h5 className='card-title'>{product.title}</h5></Link>
            <p className='card-text'>
             {product.title} - ${product.price}
            </p> 
            <Link to={`#`} className='btn btn-primary'>
              Mua ngay
            </Link>
          </div>
        </div>
        </div>
        ))}
      </div>
    </>
  )
}

export default ProductList
