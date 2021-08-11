/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./connection/db");

const path = require("path");
const cors = require("cors");
// const fileUpload = require("express-fileupload");

require("dotenv").config();

const authRoutes = require("./routes/auth");

const PORT = process.env.PORT || 3000;

// db connection
dbConnection
	.authenticate()
	.then(() => console.log("connection has been established"))
	.catch((error) => console.error("unable to connect database", err));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public/"));
// app.use(fileUpload());

app.use("/api/user", authRoutes);

app.listen(PORT, () => console.log("Server is running"));
