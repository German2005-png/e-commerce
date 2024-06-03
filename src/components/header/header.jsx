import React, { useEffect, useState } from 'react'

export function Header({products, addPrCart}) {
    const [productRandom, setProductRandom] = useState();
    useEffect(()=>{
        function handleRandom(){
            try {
                if(!productRandom){
                    let number = Math.random();
                    const proRandom = Math.floor(number * products.length + 1);
                    const t = products.find((product)=> product.id == proRandom);
                    setProductRandom(t);
                }
            }   
            catch (error) {
                console.log("Error", error)
            }
        }
        handleRandom()
        setInterval(()=>{
            handleRandom()
        }, 10000)
    },[productRandom])
  return (
    <header className='cont-header'>
        {productRandom ? (
            <>
            <ul className='header-ul'>
            <li className='header-li'>
                <h1 className='header-title'>{productRandom.title}</h1>
            </li>
            <li className='header-li'>
                <p className='header-description'>{productRandom.description}</p>
            </li>
            <li className='header-li'>
                <button className='header-btn' onClick={()=> addPrCart(productRandom)}>GET PRODUCT</button>
            </li>
        </ul>
        <img className='header-img' src={productRandom.images[0]} alt="" />
            </>
        ) : ""}
    </header>
  )
}
