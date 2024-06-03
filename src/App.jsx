import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navegation } from "./components/navegation/nav.jsx";
import { Home } from "./page/home/home.jsx";
import { Beauty } from "./page/Beauty/beauty.jsx";
import { Fragrances } from "./page/fragrances/fragrances.jsx";
import { Furniture } from "./page/furniture/furniture.jsx";
import { Groceries } from "./page/groceries/groceries.jsx";
import { Error404 } from "./page/error/error404.jsx";
import { ProductPage } from "./page/product/productPage.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [onContCart, setContCart] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        for (let pr of data.products) {
          pr.amount = 0;
        }
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);
  function addPrCart(product) {
    if (allProducts.find((pr) => pr.id === product.id)) {
      const prItems = allProducts.map((prod) => {
        return prod.id === product.id
          ? { ...prod, amount: (prod.amount += 1) }
          : prod;
      });
      return setAllProducts([...prItems]);
    }
    setAllProducts([
      ...allProducts,
      { ...product, amount: product.amount + 1 },
    ]);
  }
  function plusPrCart(product) {
    if(allProducts.find((pr) => pr.id === product.id)) {
      const prItems = allProducts.map((prod) => {
        return prod.id === product.id
          ? { ...prod, amount: (prod.amount += 1) }
          : prod;
      });
      return setAllProducts([...prItems]);
    }
  }
  function minusPrCart(product) {
    if(allProducts.find((pr) => pr.id === product.id)) {
      const prItems = allProducts.map((prod) => {
        return prod.id === product.id
          ? { ...prod, amount: (prod.amount -= 1) }
          : prod;
      });
      return setAllProducts([...prItems]);
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Navegation
                products={products}
                setProducts={setProducts}
                onContCart={onContCart}
                setContCart={setContCart}
                allProducts={allProducts}
              />
            }
          >
            <Route
              path="/"
              element={
                <Home
                  products={products}
                  setProducts={setProducts}
                  loading={loading}
                  onContCart={onContCart}
                  setContCart={setContCart}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  addPrCart={addPrCart}
                  plusPrCart={plusPrCart}
                  minusPrCart={minusPrCart}
                />
              }
            />
            <Route
              path="/beauty"
              element={
                <Beauty
                  products={products}
                  setProducts={setProducts}
                  loading={loading}
                  onContCart={onContCart}
                  setContCart={setContCart}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  addPrCart={addPrCart}
                  plusPrCart={plusPrCart}
                  minusPrCart={minusPrCart}
                />
              }
            />
            <Route
              path="/fragrances"
              element={
                <Fragrances
                  products={products}
                  setProducts={setProducts}
                  loading={loading}
                  onContCart={onContCart}
                  setContCart={setContCart}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  addPrCart={addPrCart}
                  plusPrCart={plusPrCart}
                  minusPrCart={minusPrCart}
                />
              }
            />
            <Route
              path="/furniture"
              element={
                <Furniture
                  products={products}
                  setProducts={setProducts}
                  loading={loading}
                  onContCart={onContCart}
                  setContCart={setContCart}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  addPrCart={addPrCart}
                  plusPrCart={plusPrCart}
                  minusPrCart={minusPrCart}
                />
              }
            />
            <Route
              path="/groceries"
              element={
                <Groceries
                  products={products}
                  setProducts={setProducts}
                  loading={loading}
                  onContCart={onContCart}
                  setContCart={setContCart}
                  addPrCart={addPrCart}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  plusPrCart={plusPrCart}
                  minusPrCart={minusPrCart}
                />
              }
            />
            <Route
              path="/product/:productId/:productTitle"
              element={
                <ProductPage
                  products={products}
                  setProducts={setProducts}
                  onContCart={onContCart}
                  setContCart={setContCart}
                  allProducts={allProducts}
                  setAllProducts={setAllProducts}
                  addPrCart={addPrCart}
                  plusPrCart={plusPrCart}
                  minusPrCart={minusPrCart}
                />
              }
            />
            <Route
              path="*"
              element={
                <Error404
                  onContCart={onContCart}
                  setContCart={setContCart}
                  allProducts={allProducts}
                  addPrCart={addPrCart}
                  plusPrCart={plusPrCart}
                  minusPrCart={minusPrCart}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
