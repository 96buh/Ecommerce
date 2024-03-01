import React, { useState } from "react";
import styles from "../css/loginForm.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import axios from "axios";

function LoginForm(props) {
  const navigate = useNavigate();
  const [inputs, setInput] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { login } = useAuth(); // 获取登录函数

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        inputs
      );
      if (response.status === 200) {
        console.log(response.data.message);
        localStorage.setItem("token", "Bearer" + response.data.token);
        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("userId", response.data.id);
        console.log(response.data);
        login();
        navigate("/home");
      }
    } catch (error) {
      if (error.response.status === 401) {
        setPasswordError(true);
        console.log(error.response.data.message);
      } else {
        setEmailError(true);
        console.log(error.response.data.message);
      }
    }
  };

  function inputHandler(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin}>
        <div className={styles.formName}>Login</div>
        {/* email input */}
        <div>
          {emailError ? (
            <div style={{ color: "red" }}>
              Email does not exist, please register first
            </div>
          ) : (
            <div className={styles.fieldName}>Email</div>
          )}

          <input
            type="email"
            required
            value={inputs.email}
            onChange={inputHandler}
            name="email"
            className={
              emailError ? styles.inCorrectUserInput : styles.userInput
            }
            autoComplete="username"
          />
        </div>
        {/* 密碼輸入 */}
        <div className={styles.passwordContainer}>
          {passwordError ? (
            <div style={{ color: "red" }}>Wrong password, please try again</div>
          ) : (
            <div className={styles.fieldName}>Password</div>
          )}
          <input
            type={showPassword ? "text" : "password"}
            required
            value={inputs.password}
            onChange={inputHandler}
            name="password"
            className={
              passwordError ? styles.inCorrectUserInput : styles.userInput
            }
            autoComplete="new-password"
          />
          {/* 切換密碼能見度 */}
          <div
            className={styles.toggleVisibility}
            onClick={showPasswordHandler}
          >
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </div>
        </div>
        <button className={styles.submitBtn} type="submit">
          LOGIN
        </button>
        <div className={styles.registerText}>
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
