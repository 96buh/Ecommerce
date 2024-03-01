import React from "react";
import styles from "../css/header.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCart from "./ShoppingCart";
import { useNavigate, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedin");
  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("userId");
    navigate("/home");
  };

  return (
    <header className={styles.container}>
      <div>
        <Link to="/home" className={styles.storeName}>
          <strong>Store</strong>
        </Link>
      </div>
      <div>
        <input
          type="text"
          placeholder="    Search"
          className={styles.searchBar}
        />
        <button className={styles.searchBtn} type="submit">
          <SearchIcon />
        </button>
      </div>
      <div class={styles.buttonContainer}>
        <ShoppingCart />
        {/* 如果登入顯示頭像, 不然就顯示註冊/登入按鈕 */}
        {isLoggedIn ? (
          <div>
            <AccountCircleIcon
              style={{ color: "23a6f0" }}
              className={styles.profileIcon}
            />
          </div>
        ) : (
          <div className={styles.logInorRegister}>
            <Link to="/login" className={styles.logInorRegister}>
              <PersonOutlinedIcon /> Login
            </Link>
          </div>
        )}
      </div>
      <div onClick={Logout} className={styles.logout}>
        Logout
      </div>
    </header>
  );
}

export default Header;
