const express = require("express");
const products = require("./routes/products.js")


const app = express();

app.use(express.json());
app.use("/products", products)



app.listen(3000, () => {
    console.log("Server is running on port 3000.")
})