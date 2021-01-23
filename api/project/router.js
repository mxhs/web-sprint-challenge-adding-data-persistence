// build your `/api/projects` router here
const express = require("express");
const db = require("../../data/dbConfig");

const Projects = require("./model");
const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const projects = await Projects.findAllProjects("projects");
		res.status(200).json(projects);
	} catch (err) {
		next(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const newProject = await Projects.insert("projects", req.body);
		res.status(201).json(newProject);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
