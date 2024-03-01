-- 根據 user_id 來取得購物車內容
SELECT products.name,products.price, products.stock, cart.*
FROM products
INNER JOIN cart ON products.product_id = cart.product_id
WHERE user_id = 1;
