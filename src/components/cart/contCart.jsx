import React, { useEffect, useState } from 'react';
import xIcon from "../../../public/svg/x.svg";

export function ContCart({onContCart, setContCart, products, allProducts, setAllProducts, plusPrCart, minusPrCart}) {
  useEffect(()=>{
    setTimeout(()=>{
      if(onContCart){
        document.querySelector(".flex-cont-cart").className = "flex-cont-cart d";
        document.querySelector(".content-cart").className = "content-cart s";
      }else{
        document.querySelector(".flex-cont-cart").className = "flex-cont-cart";
        document.querySelector(".content-cart").className = "content-cart";
      }
    },100)
  },[onContCart])
  function convertToUrl(txt){
    txt = txt.replaceAll(" ", "-");
    return txt
  }
  return (
    <div className="flex-cont-cart">
      <div className="content-cart">
        <div className='cont-flex-cart'>
        <h1 className='cart-header-title'>Cart</h1>
        <ul className='cart-ul'>
          {allProducts.map((Element, index)=>(
            <li className='cart-li' key={index}>
            <a className='cart-a-img' href={`/product/${Element.id}/${convertToUrl(Element.title)}`}>
              <img className='cart-img' src={Element.images[0]} alt="" />
            </a>
            <div className='cart-cont-description'>
              <div className='cont-cart-desc-front'>
              <a href={`/product/${Element.id}/${convertToUrl(Element.title)}`} className='cart-title'>{Element.title}</a>
              <button className='cart-delete-btn' onClick={()=>{
                setAllProducts([...allProducts.filter(d => d.id !== Element.id)]);
              }}><img src={xIcon}/></button>
              </div>
              <span className='cart-price'>$ {Element.price}</span>
              <div className='cart-cont-amount'>
                <button className='cart-amount-btn' onClick={()=>{
                  minusPrCart(Element)
                  if(Element.amount <= 0){
                    setAllProducts([...allProducts.filter(d => d.id !== Element.id)])
                  }
                }}>-</button>
                <span className='cart-amount'>{Element.amount}</span>
                <button className='cart-amount-btn' onClick={()=> {
                  plusPrCart(Element)
                }}>+</button>
              </div>
            </div>
            </li>
          ))}
        </ul>
        <form className='cart-form'>
            <button className='cart-form-btn'>Buy Products</button>
        </form>
        </div>
      </div>
    </div>
  )
}
