import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Article({ products, onContCart, setContCart, allProducts, addPrCart}) {
  const UrlCategory = window.location.pathname.replace("/", "")
  function convertToUrl(txt){
    txt = txt.replaceAll(" ", "-");
    return txt
  }
  const handleProducts = (Element, index) => (
    <li key={index} className="product-li">
      <article className="article-product">
        <Link to={`/product/${Element.id}/${convertToUrl(Element.title)}`} className="cont-article-product-img">
          <img
            className="article-product-img"
            src={Element.images[0]}
          />
        </Link>
        <ul className="article-product-ul">
          <li className="article-product-li">
            <Link to={`/product/${Element.id}/${convertToUrl(Element.title)}`} className="article-product-title" title={Element.title}>
              {convertToUrl(Element.title)}
            </Link>
          </li>
          <li className="article-product-li">
            <span className="ar-pr-li-price">${Element.price} USD</span>
          </li>
          <li className="article-product-li">
            <button className="article-product-btn" onClick={()=>{
              addPrCart(Element)
            }}>GET</button>
          </li>
        </ul>
      </article>
    </li>
  )
  // {products.map(handleProducts)}
  if(products){
    if(UrlCategory == "beauty"){
      return(
        <>
        {products.filter(d => d.category == UrlCategory).map(handleProducts)}
        </>
      )
    }
    else if(UrlCategory == "fragrances"){
      return(
        <>
        {products.filter(d => d.category == UrlCategory).map(handleProducts)}
        </>
      )
    }
    else if(UrlCategory == "furniture"){
      return(
        <>
        {products.filter(d => d.category == UrlCategory).map(handleProducts)}
        </>
      )
    }
    else if(UrlCategory == "groceries"){
      return(
        <>
        {products.filter(d => d.category == UrlCategory).map(handleProducts)}
        </>
      )
    }
    else{
      return(
        <>
        {products.map(handleProducts)}
        </>
      )
    }
  }
}
