//購物車內的商品
import React from "react";
import styles from "../css/cart.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Items(props) {
  const [quantity, setQuantity] = useState(props.quantity);
  const [subtotal, setSubtotal] = useState(props.price * props.quantity);
  useEffect(() => {
    updateSubtotal(quantity);
    updateCartItem();
  }, [quantity]);
  const updateCartItem = async () => {
    try {
      // 假设你有 productId 和 quantity
      const response = await axios.post(
        "http://localhost:5000/api/updateCart",
        {
          cart_id: props.id,
          quantity: quantity,
        }
      );
      console.log(response.data); // 处理后端的响应，可能包含更新后的购物车信息
    } catch (error) {
      console.error("购物车更新请求失败:", error);
    }
  };

  const addQuantity = () => {
    if (quantity < props.stock) {
      setQuantity(quantity + 1);
    }
  };

  const subQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const updateSubtotal = (newQuantity) => {
    setSubtotal(props.price * newQuantity);
  };
  const handleInputChange = (e) => {
    const inputText = e.target.value;
    const numericValue = parseInt(inputText, 10);
    if (!isNaN(numericValue) && numericValue < props.stock) {
      setQuantity(numericValue);
    } else if (inputText === "") {
      setQuantity("");
    } else if (numericValue >= props.stock) {
      setQuantity(props.stock);
    }
  };

  return (
    <>
      {/* 選取要結帳的項目 */}
      <div className={styles.item}>
        <div>
          <input type="checkbox" />
        </div>

        <div className={styles.product}>
          <img src="images/product.png" alt="" className={styles.pic} />
          <div className={styles.productName}>{props.name}</div>

          <div className={styles.setQuantity}>
            {/* 可以讓使用者輸入要多少個商品 */}
            <input
              type="tel"
              value={quantity}
              className={styles.quantity}
              onChange={handleInputChange}
            />

            <div className={styles.btnContainer}>
              <button className={styles.addQuantity} onClick={addQuantity}>
                +
              </button>
              <button className={styles.subQuantity} onClick={subQuantity}>
                -
              </button>
            </div>
          </div>
          <div className={styles.subtotal}>${subtotal.toFixed(2)}</div>
          <button className={styles.deleteBtn}>X</button>
        </div>
      </div>
    </>
  );
}
