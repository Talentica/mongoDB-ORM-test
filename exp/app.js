const express = require("express");
const bodyParser = require("body-parser");
const product = require("./routes/product.route");
require("./database");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
