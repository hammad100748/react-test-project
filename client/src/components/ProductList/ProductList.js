import React from 'react'
import './ProductList.css'
import ProductItem from '../ProductItem/ProductItem'

const productList = (props) => {
  const productItem = props.products &&
    props.products.map((product, index) => {
      if (index < props.lastIndex) {
        return <ProductItem
          key={product.id}          
          product={product}
          getAddImageUrl={props.getAddImageUrl}
          index={index} />
      } else return null
    })
  return (
    <div className="ProductList">
      {productItem}      
    </div>
  )
}
export default productList;
