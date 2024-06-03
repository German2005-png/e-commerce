import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContCart } from "../../components/cart/contCart";

export function ProductPage({
  products,
  loading,
  onContCart,
  setContCart,
  allProducts,
  setAllProducts,
  addPrCart,
  plusPrCart,
  minusPrCart
}) {
  let { productId } = useParams();
  const [product, setProductFind] = useState({});
  const [shownImage, setShownImage] = useState(product?.images);
  useEffect(() => {
    try {
      const productFind = products.find((pr) => pr.id == productId);
      setProductFind(productFind || {});
    } catch (error) {
      console.log("Error", error);
    }
  }, [products, productId]);
  useEffect(() => {
    if (product.images && product.images.length > 0) {
      setShownImage(product.images[0]);
    }
  }, [product]);
  return (
    <>
      {onContCart ? (
        <>
          <ContCart
            onContCart={onContCart}
            setContCart={setContCart}
            products={products}
            allProducts={allProducts}
            addPrCart={addPrCart}
            setAllProducts={setAllProducts}
            plusPrCart={plusPrCart}
            minusPrCart={minusPrCart}
          />
        </>
      ) : (
        ""
      )}
      <div className="content-product">
        <div className="flex-cont-ar-product-img">
          <ul className="cont-product-ul-ar-imgs">
            {product?.images?.map((imgURL, i) => {
              return (
                <article
                  key={i}
                  className="product-ar-imgs"
                  onClick={() => setShownImage(imgURL)}
                >
                  <img className="pr-ar-imgs" src={imgURL} alt="" />
                </article>
              );
            })}
          </ul>
          <div className="cont-product-img">
            <article className="product-ar-img">
              <img className="pr-ar-img" src={shownImage} width="400" alt="" />
            </article>
          </div>
        </div>
        <div className="cont-pr-description">
          <div>valoraciones</div>
          <div className="cont-pr-desc">
            <h1 className="pr-desc-title">{product?.title}</h1>
            <span>Description</span>
            <p className="pr-desc-description">{product?.description}</p>
            <span className="pr-desc-price">{`$${product?.price} USD`}</span>
            <div>
              <button className="pr-desc-btn" onClick={()=>{
                addPrCart(product)
              }}>GET PRODUCT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
