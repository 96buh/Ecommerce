import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../css/loginForm.module.css";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function RegisterForm() {
  const navigate = useNavigate();
  const [inputs, setInput] = useState({
    name: "",
    email: "",
    password: "",
    comfirmPassword: "",
  });

  //true 密碼不符合
  const [match, setMatch] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [firstInput, setFirstInput] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    // 在第一次輸入後或密碼改變時檢查密碼是否不足 8 個字符，如果是，設置相應的提示
    if (firstInput && inputs.password.length < 8) {
      setPasswordLength(true);
      console.log("Password must be at least 8 characters");
    }
  }, [inputs.password, firstInput]); // 在 inputs.password 或 firstInput 改變時觸發

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "password") {
      setFirstInput(true); // 設置為 true，表示已經進行過第一次輸入
      setPasswordLength(value.length < 8);
    } else if (name === "comfirmPassword" && value !== inputs.password) {
      setMatch(true);
    } else if (!firstInput && inputs.password.length < 8) {
      setPasswordLength(false);
    }
    if (name === "comfirmPassword" && value === inputs.password) {
      setMatch(false);
    }
    setInput((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  function showPasswordHandler() {
    setShowPassword(!showPassword);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      inputs.password === inputs.comfirmPassword &&
      inputs.password.length >= 8
    ) {
      //請求後端
      axios
        .post("http://localhost:5000/api/addNewUser", inputs)
        .then((res) => {
          if (res.status === 200) {
            console.log(res, "Add a new user successfully");
            navigate("/home");
          }
        })
        .catch((err) => {
          console.log(err.message, "email already exists");
          setIsEmailExist(true);
        });
    } else if (inputs.password.length < 8) {
      setPasswordLength(true);
    } else if (inputs.password !== inputs.comfirmPassword) {
      setMatch(true);
    }
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.formName}>Signup</div>

        <div>
          <div className={styles.fieldName}>Name *</div>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={inputs.name}
            name="name"
            className={styles.userInput}
            onChange={handleChange}
          />
        </div>
        <div>
          {isEmailExist ? (
            <div style={{ color: "red" }}>Email already exist!</div>
          ) : (
            <div className={styles.fieldName}>Email adress *</div>
          )}
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            value={inputs.email}
            name="email"
            className={
              isEmailExist ? styles.inCorrectUserInput : styles.userInput
            }
            onChange={handleChange}
            autoComplete="username"
          />
        </div>
        {/* 第一次輸入密碼 */}
        <div className={styles.passwordContainer}>
          {passwordLength ? (
            <div style={{ color: "red" }}>
              Password must be at least 8 characters
            </div>
          ) : (
            <div className={styles.fieldName}>Password *</div>
          )}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={inputs.password}
            name="password"
            className={
              passwordLength ? styles.inCorrectUserInput : styles.userInput
            }
            onChange={handleChange}
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
        {/* 確認密碼區 */}
        <div className={styles.passwordContainer}>
          {match ? (
            <div style={{ color: "red" }}>Passwords don't match</div>
          ) : (
            <div className={styles.fieldName}>Repeat your Password *</div>
          )}

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            value={inputs.comfirmPassword}
            name="comfirmPassword"
            className={match ? styles.inCorrectUserInput : styles.userInput}
            onChange={handleChange}
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
        {/* 條款確認和切換登入/註冊 */}
        <div className={styles.checkContainer}>
          <div>
            <input type="checkbox" required />
            <label>
              I agree to the <a href="/">Terms and Conditions</a>
            </label>
          </div>
          <Link to="/login">Login</Link>
        </div>
        {/* 提交 */}
        <button className={styles.submitBtn} type="submit">
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
