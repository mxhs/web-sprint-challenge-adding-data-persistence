// build your server here
const express = require("express");
const db = require("../data/dbConfig");

const ProjectRouter = require("./project/router");

const server = express();
server.use(express.json());

server.use("/api/projects", ProjectRouter);

server.use((err, req, res, next) => {
	res.status(500).json({ message: err.message, stack: err.stack });
});

module.exports = server;
