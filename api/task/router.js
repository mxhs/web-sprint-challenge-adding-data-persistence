// build your `/api/tasks` router here
const express = require("express");

const Tasks = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const tasks = await Tasks.findAllTasks("tasks as t");
		res.status(200).json(tasks);
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newTask = await Tasks.insert("tasks", req.body);
		res.status(201).json(newTask[0]);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
