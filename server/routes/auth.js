/** @format */

const express = require("express");
const router = express.Router();

const UserModal = require("../model/UserModal");
const bcrypt = require("bcrypt");

const webtoken = require("jsonwebtoken");

router.post("/register", (req, res) => {
	const { username, password, email } = req.body;
	const { profilePic } = req.files.profilePic; // name of the input tag which imports images from the system

	// uploading img path
	let sampleFile;
	let uploadPath;

	if (!req.files || Object.keys(req.files).length === 0) {
		return res.status(400).send("No files were uploaded");
	}

	sampleFile = req.files.sampleFile;
	uploadPath = __dirname + "/upload/" + sampleFile;

	sampleFile.mv(uploadPath, function (err) {
		if (err) return res.status(500).send(err);
	});

	// creating/validating rest of the fields
	if (
		username == undefined ||
		username == "" ||
		password == undefined ||
		password == "" ||
		email == undefined ||
		email == ""
	) {
		res.status(400).json({
			message: "Fill all fields",
			status: res.statusCode,
		});
	} else {
		UserModal.findOne({
			attributes: ["user_name"],
			where: {
				email,
			},
		}).then((value) => {
			if (value === null) {
				bcrypt.genSalt(10, function (err, salt) {
					bcrypt.hash(password, salt, (err, hash) => {
						UserModal.create({
							user_name: username,
							email: email,
							password: hash,
							profile_pic: profilePic,
						})
							.then((value) => {
								res.status(201).json({
									message: "Account has been created successfully",
									status: res.statusCode,
								});
							})
							.catch((err) =>
								res.status(404).json({ message: "Something went wrong" })
							);
					});
				});
			} else {
				res
					.status(401)
					.json({ message: "Email already taken", status: res.statusCode });
			}
		});
	}
});

module.exports = router;
