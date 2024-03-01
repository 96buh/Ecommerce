import React, { useState, useEffect } from "react";
import styles from "../css/featureProducts.module.css";
import axios, { all } from "axios";
import { Link } from "react-router-dom";

async function fetchData() {
  const response = await axios.get(
    "http://localhost:5000/api/getFeaturedItems"
  );
  return response.data;
}

export default function FeatureProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData();
        setAllProducts(data);
      } catch (error) {
        console.error("獲取數據時發生錯誤:", error);
      }
    };
    fetchDataAsync();
  }, []); 
  const products = allProducts.map((product) => {
    let image = "images/" + `${product.product_id}` + ".png";
    return (
      <div key={product.product_id} className={styles.item}>
        <Link style={{ textDecoration: "none" }}>
          <img src={image} alt={product.name} />
          <div className={styles.productName}>{product.name}</div>
          <div className={styles.companyName}>Company</div>
          <div className={styles.productPrice}>${product.price}</div>
        </Link>
      </div>
    );
  });
  return (
    <>
      <header className={styles.featureProductsTitleContainer}>
        <h1>Featured Products</h1>
        <h2>BESTSELLER PRODUCTS</h2>
        <h3>Problems trying to resolve the conflict between</h3>
      </header>
      <main>
        <div className={styles.featureProductsContainer}>{products}</div>
      </main>
    </>
  );
}
