import React, { useEffect, useState } from 'react'
import cartIcon from "../../../public/svg/cart.svg";
import searchIcon from "../../../public/svg/search.svg";
import xIcon from "../../../public/svg/x.svg";
import { Outlet } from 'react-router-dom';

export function Navegation({products, onContCart, setContCart, allProducts}) {
  const [searchValue, setSearchValue] = useState("");
  const [onContSearch, setContSearch]= useState(false);
  const [onXSearch, setXSearch]= useState(false);
  const [onFindPrNav, setFindPrNav]= useState({});
  useEffect(()=>{
    if(searchValue){
      setContSearch(true);
      setXSearch(true);
    }
    if(searchValue == ""){
      setContSearch(false);
      setXSearch(false);
    }
    const searchPr = products.filter((e)=> e.title.toLowerCase().includes(searchValue.toLowerCase()));
    if(searchPr){
      setFindPrNav(searchPr)
    }
  },[searchValue])
  function convertToUrl(txt){
    txt = txt.replaceAll(" ", "-");
    return txt
  }
  return (
    <>
    <nav className='navegation'>
        <a className='nav-title' href='/'>Ecommerce</a>
        <form className='nav-form' onSubmit={(e)=>{
          e.preventDefault()
          window.location.href = `/product/${onFindPrNav[0].id}/${convertToUrl(onFindPrNav[0].title)}`
        }}>
            <input className='nav-search' type="text" placeholder='Search' autoComplete='none' onChange={(e)=>{
              setSearchValue(e.target.value);
            }}/>
            {onContSearch ? (
              <>
              <span className='nav-x-btn' onClick={()=> {
                setSearchValue("")
                document.querySelector(".nav-search").value = "";
              }}><img src={xIcon} alt="" /></span>
              </>
            ) : ""}
            <button className='nav-submit' type='submit'><img src={searchIcon} /></button>
            {onContSearch && searchValue.length >= 2 ? (
              <>
              <div className='cont-nav-search'>
              <ul className='cont-nav-search-ul'>
                <li className='cont-nav-search-li-space'></li>
                {onFindPrNav.length ? (
                  <>
                  {onFindPrNav.map((Element, index)=>(
                  <li className='cont-nav-search-li' key={index}>
                  {onFindPrNav ? (
                    <>
                    <a className='cont-nav-search-a-img' href={`/product/${Element.id}/${convertToUrl(Element.title)}`}><img src={Element.images[0]} alt="" /></a>
                    <a href={`/product/${Element.id}/${convertToUrl(Element.title)}`} className='cont-nav-search-txt'>{Element.title}</a>
                    </>
                  ) : ""}
                </li>
                ))}
                  </>
                ) : (
                  <p className='cont-nav-search-txt'>{searchValue}</p>
                )}
              </ul>
            </div>
              </>
            ) : ""}
        </form>
        <div className='nav-cont-right'>
            <button className='nav-btn-cart' title='cart' onClick={()=> setContCart(!onContCart)}>
              <img src={cartIcon} />
              <span className='lenghtCart'>{allProducts.length}</span>
            </button>
        </div>
    </nav>
    <Outlet />
    </>
  )
}
