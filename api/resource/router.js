// build your `/api/resources` router here
const express = require("express");

const Resources = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const resources = await Resources.findAll("resources");
		res.status(200).json(resources);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
