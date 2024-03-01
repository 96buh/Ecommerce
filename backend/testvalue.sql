-- 先註冊兩個使用者用來測試
INSERT INTO user_details (user_id, address, phone)
VALUES 
    (1, '123 Main St, City', '1234567890'),
    (2, '456 Oak St, Town', '9876543210');
INSERT INTO categories (category_id, name, description)
VALUES 
    (1, 'Electronics', 'Electronic gadgets and devices'),
    (2, 'Clothing', 'Fashionable apparel'),
    (3, 'Home & Living', 'Household and lifestyle products');
INSERT INTO products (product_id, name, description, price, stock, category_id)
VALUES 
    (1, 'Smartphone', 'High-end smartphone with advanced features', 799.99, 50, 1),
    (2, 'Laptop', 'Powerful laptop for professional use', 1299.99, 30, 1),
    (3, 'T-shirt', 'Comfortable cotton T-shirt in various colors', 19.99, 100, 2),
    (4, 'Jeans', 'Classic denim jeans for a stylish look', 49.99, 80, 2),
    (5, 'Coffee Maker', 'Automatic coffee maker for home use', 89.99, 20, 3),
    (6, 'Bedding Set', 'Luxurious bedding set for a cozy bedroom', 129.99, 40, 3);
INSERT INTO orders (order_id, user_id, order_date, status)
VALUES 
    (1, 1, '2024-02-01', 'Pending'),
    (2, 2, '2024-02-02', 'Shipped');
INSERT INTO order_details (order_detail_id, order_id, product_id, quantity, subtotal)
VALUES 
    (1, 1, 1, 2, 1599.98),
    (2, 1, 3, 3, 59.97),
    (3, 2, 2, 1, 1299.99);
INSERT INTO cart (cart_id, user_id, product_id, quantity, subtotal)
VALUES 
    (1, 1, 1, 2, 1599.98),
    (2, 1, 3, 3, 59.97),
    (3, 2, 4, 1, 49.99);
