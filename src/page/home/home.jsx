import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/header.jsx";
import { Content } from "../../components/content/content.jsx";
import { Aside } from "../../components/aside/aside.jsx";
import { ContProduct } from "../../components/content/contProduct.jsx";
import { ContCart } from "../../components/cart/contCart.jsx";

export function Home({products, setProducts, loading, onContCart, setContCart, allProducts, setAllProducts, addPrCart, plusPrCart, minusPrCart}) {
    return (
        <>
            {onContCart ? (
            <>
            <ContCart onContCart={onContCart} setContCart={setContCart} products={products} allProducts={allProducts} setAllProducts={setAllProducts} setProducts={setProducts} addPrCart={addPrCart} plusPrCart={plusPrCart} minusPrCart={minusPrCart} />
            </>
            ) : ""}
            <main>
                {!loading && <Header products={products} addPrCart={addPrCart}/>}
                <Content>
                    {!loading && <Aside products={products}/>}{!loading && <ContProduct products={products} onContCart={onContCart} setContCart={setContCart} allProducts={allProducts} addPrCart={addPrCart}/>}
                </Content>
            </main>
        </>
    );
}
