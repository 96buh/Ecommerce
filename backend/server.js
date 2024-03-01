import express from "express";
import cors from "cors";
import pg from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import session from "express-session";
const db = new pg.Client({
  user: "postgres",
  password: "ace17931793",
  database: "ecommerce",
  host: "localhost",
  port: 5432,
});
db.connect();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/api/addNewUser", async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const { name, email, password } = body;
    //把密碼加密
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    //把使用者資料存入資料庫
    await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [name, email, passwordHash]
    );

    res.status(200).json({ success: true, message: "User added successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Email has already been used" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const body = req.body;
    const { email, password } = body;
    const result = await db.query("SELECT * FROM users WHERE email = $1 ", [
      email,
    ]);
    const user = result.rows[0];
    const storeHashPassword = result.rows[0].password;
    bcrypt.compare(password, storeHashPassword, (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        // token
        const id = user.user_id;
        const token = jwt.sign({ id }, "jwtSecret", {
          expiresIn: 3600,
        });
        // console.log(token);
        res.status(200).json({
          success: true,
          message: "Login successfully",
          token: token,
          auth: true,
          id: id,
        });
      } else {
        res.status(401).json({ success: false, message: "Password is wrong" });
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Email doesn't exist" });
  }
});

app.get("/api/getFeaturedItems", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM products");
    res.status(200).json(result.rows);
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/getItemsInCart", async (req, res) => {
  try {
    const user_id = req.query.userId;
    const result = await db.query(
      `SELECT products.name,products.price, 
      products.stock, 
      cart.* FROM products 
      INNER JOIN cart ON products.product_id = cart.product_id 
      WHERE user_id = ${user_id}`
    );
    const data = result.rows;
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/updateCart", async (req, res) => {
  try {
    const { cart_id, quantity } = req.body;
    const result = await db.query(
      "UPDATE cart SET quantity = $1 WHERE cart_id = $2 returning *",
      [quantity, cart_id]
    );
    console.log(result.rows);
    res.status(200);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
