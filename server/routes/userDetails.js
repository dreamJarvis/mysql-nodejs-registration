/** @format */

const express = require("express");
const exphbs = require("express-handlebars");
const router = express.Router();

const UserModal = require("../model/UserModal");
const bcrypt = require("bcrypt");

const webtoken = require("jsonwebtoken");

router.post("/api/user/uploadPic", (req, res) => {
	let sampleFiles;
	let uploadPath;

	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send("No files were uploaded");
	}

	sampleFile = req.files.sampleFile;
	uploadPath = __dirname + "/upload/" + sampleFile;

	console.log(sampleFile);

	sampleFile.mv(uploadPath, function (err) {
		if (err) return res.status(500).send(err);
		res.send("file uploaded");
	});
});
