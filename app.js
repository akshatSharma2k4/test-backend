const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => res.status(200).json({ message: "Hello World" }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
