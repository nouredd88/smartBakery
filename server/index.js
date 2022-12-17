const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

// * Middleware
app.use(cors());
app.use(express.json());

// * ROUTES

// * ADMIN LOGIN

app.post("/Admin", async (req, res) => {
  try {
    const { name, password } = req.body;
    const Response = await pool.query(
      "SELECT* FROM admin WHERE admin_name=$1 and admin_password=$2",
      [name, password]
    );

    if (Response.rows.length === 0) {
      res.json(false);
    } else {
      res.json(true);
    }
  } catch (error) {
    console.error(error.message);
  }
});

//* GET ALL PRODUCTS

app.get("/Products", async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT* FROM product");
    res.json(allProducts.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//* ADD NEW PRODUCT
app.post("/AddProduct", async (req, res) => {
  try {
    const { name, description, price, image } = req.body;

    const newProduct = await pool.query(
      "INSERT INTO product (pr_name,pr_description,pr_price,pr_image_url) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, description, price, image]
    );

    res.send("Product Was Added!");
  } catch (err) {
    console.error(err.message);
  }
});

//* DELETE A PRODUCT
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await pool.query(
    "DELETE FROM product WHERE pr_code=$1",
    [id]
  );
  res.json(true);
});

//* GET A SINGLE PRODUCT
app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query("SELECT* FROM product WHERE pr_code=$1", [
      id,
    ]);
    res.json(product.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//* UPDATE PRODUCT
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image } = req.body;

    const updateProduct = await pool.query(
      "UPDATE product SET pr_name=$1, pr_description=$2, pr_price=$3, pr_image_url=$4  WHERE pr_code = $5",
      [name, description, price, image, id]
    );
    res.json(true);
  } catch (error) {
    console.error(error.message);
  }
});

//* CREATE A NEW customer

app.post("/customer", async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const newcustomer = await pool.query(
      "INSERT INTO user_ (u_email,u_name,u_password) VALUES ($1,$2,$3) RETURNING *",
      [email, name, password]
    );

    res.json(true);
  } catch (err) {
    res.json(false);
    console.error(err.message);
  }
});

//* Customer Login

app.post("/CustomerLogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const Response = await pool.query(
      "SELECT* FROM user_ WHERE u_email=$1 and u_password=$2",
      [email, password]
    );

    if (Response.rows.length === 0) {
      res.json(false);
    } else {
      res.json(true);
    }
  } catch (error) {
    console.error(error.message);
  }
});

//* ADD ORDER

app.post("/orders", async (req, res) => {
  try {
    const { email, id, quantity, price } = req.body;
    const neworder = await pool.query(
      "INSERT INTO order_ (u_email,pr_id,ord_status,ord_quantity,ord_price) VALUES ($1,$2,$3,$4,$5)",
      [email, id, "Pending", quantity, price * quantity]
    );

    res.json(true);
  } catch (err) {
    res.json(false);
    console.error(err.message);
  }
});

//* Get All Orders

app.get("/viewOrders", async (req, res) => {
  try {
    const allorders = await pool.query(
      "SELECT* FROM order_ join product on order_.pr_id=product.pr_code"
    );
    res.json(allorders.rows);
  } catch (error) {
    console.error(error.message);
  }
});

//* DELETE AN ORDER

app.delete("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const deleteOrder = await pool.query(
    "DELETE FROM order_ WHERE ord_number=$1",
    [id]
  );
  res.json(true);
});

//* App will start listening at port 5000

app.listen(5000, () => {
  console.log("Server is starting at port 5000");
});
