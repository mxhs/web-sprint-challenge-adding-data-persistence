// build your `/api/tasks` router here
const express = require("express");

const Tasks = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const tasks = await Tasks.findAll("tasks");
		res.status(200).json(tasks);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
