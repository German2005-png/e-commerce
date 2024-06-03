import React from 'react'
import { Article } from '../article/article'

export function ContProduct({products, onContCart, setContCart, allProducts, addPrCart}) {
  return (
    <div className='flex-cont-product'>
      <div className='cont-product-description'>
        <h3 className='product-description-title'>Products</h3>
      </div>
      <ul className="product-ul">
        <Article products={products} onContCart={onContCart} setContCart={setContCart} allProducts={allProducts} addPrCart={addPrCart}/>
      </ul>
    </div>
  )
}
