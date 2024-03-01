import React from "react";
import styles from "../css/cart.module.css";
import Header from "./Header";
import Items from "./Items";
import axios, { all } from "axios";

async function fetchData() {
  const userId = localStorage.getItem("userId");
  const response = await axios.get(
    `http://localhost:5000/api/getItemsInCart?userId=${userId}`
  );
  return response.data;
}

export default function Cart() {
  const [allProducts, setAllProducts] = React.useState([]);
  React.useEffect(() => {
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

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        {allProducts.map((product) => {
          return (
            <Items
              key={product.cart_id}
              id={product.cart_id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              quantity={product.quantity}
            />
          );
        })}
      </div>
    </>
  );
}
