import React from "react";
import { Header } from "../../components/header/header";
import { Content } from "../../components/content/content";
import { Aside } from "../../components/aside/aside";
import { ContProduct } from "../../components/content/contProduct";
import { ContCart } from "../../components/cart/contCart";

export function Furniture({
  products,
  setProducts,
  loading,
  onContCart,
  setContCart,
  allProducts,
  setAllProducts,
  addPrCart,
  plusPrCart,
  minusPrCart,
}) {
  document.title = "Ecommerce - Furniture";
  return (
    <>
      {onContCart ? (
        <>
          <ContCart
            onContCart={onContCart}
            setContCart={setContCart}
            products={products}
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            setProducts={setProducts}
            addPrCart={addPrCart}
            plusPrCart={plusPrCart}
            minusPrCart={minusPrCart}
          />
        </>
      ) : (
        ""
      )}
      <main>
        {!loading && <Header products={products} addPrCart={addPrCart} />}
        <Content>
          {!loading && <Aside products={products} />}
          {!loading && (
            <ContProduct
              products={products}
              onContCart={onContCart}
              setContCart={setContCart}
              allProducts={allProducts}
              addPrCart={addPrCart}
            />
          )}
        </Content>
      </main>
    </>
  );
}
