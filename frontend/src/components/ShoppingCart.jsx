import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "../css/shoppingCart.module.css";
import { Link } from "react-router-dom";

function ShoppingCart() {
  const [cartVisible, setCartVisible] = React.useState(false);
  const isLoggedin = localStorage.getItem("isLoggedin");
  function cartVisibility() {
    setCartVisible(!cartVisible);
  }

  return (
    <div
      className={styles.dropDown}
      onMouseOver={cartVisibility}
      onMouseOut={cartVisibility}
    >
      <Link to={isLoggedin ? "/cart" : "/login"} className={styles.dropBtn}>
        <ShoppingCartOutlinedIcon />
      </Link>

      <div className={styles.dropDownContent}>
        <div className={styles.dropDownItem}></div>
        <div className={styles.dropDownItem}></div>
      </div>
    </div>
  );
}

export default ShoppingCart;
