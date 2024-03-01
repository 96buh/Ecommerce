-- 刪除所有表格的 SQL 程式碼
-- 如果存在表格就刪除 cart 表格
DROP TABLE IF EXISTS cart;
-- 如果存在表格就刪除 order_details 表格
DROP TABLE IF EXISTS order_details;
-- 如果存在表格就刪除 user_details 表格
DROP TABLE IF EXISTS user_details;
-- 如果存在表格就刪除 products 表格
DROP TABLE IF EXISTS products;
-- 如果存在表格就刪除 categories 表格
DROP TABLE IF EXISTS categories;
-- 如果存在表格就刪除 orders 表格
DROP TABLE IF EXISTS orders;
-- 如果存在表格就刪除 users 表格
DROP TABLE IF EXISTS users;

-- 創建所有表格的 SQL 程式碼
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

-- 住址和電話號碼 
CREATE TABLE user_details(
    user_id SERIAL PRIMARY KEY,
    address TEXT,
    phone VARCHAR(10),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- 商品分類
CREATE TABLE categories(
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description TEXT
);

-- 商品資料
CREATE TABLE products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    description TEXT,
    price DECIMAL(10,2),
    stock INT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)

);

-- 訂購資料 下單用戶, 日期
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    user_id INT,
    order_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
-- 訂單明細
CREATE TABLE order_details(
    order_detail_id SERIAL PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    subtotal DECIMAL(10,2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
-- 購物車
CREATE TABLE cart (
    cart_id INT PRIMARY KEY,
    user_id INT,
    product_id INT,
    quantity INT,
    subtotal DECIMAL(10, 2), -- Static storage of subtotal
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

