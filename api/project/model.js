// build your `Project` model here
const db = require("../../data/dbConfig");
const helper = require("../../data/helpers/mappers");

const findAllProjects = async (table) => {
	try {
		const projects = await db(table);
		return helper.mapIntToBool(projects, ["project_completed"]);
	} catch (err) {
		throw new Error();
	}
};

const insert = async (table, project) => {
	try {
		await db(table).insert(project);
		const newProject = await db(table).where({
			project_name: project.project_name,
		});

		return helper.mapIntToBool(newProject, ["project_completed"]);
	} catch (err) {
		throw new Error();
	}
};

module.exports = { findAllProjects, insert };
