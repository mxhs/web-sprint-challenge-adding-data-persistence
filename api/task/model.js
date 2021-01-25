// build your `Task` model here
const db = require("../../data/dbConfig");
const helper = require("../../data/helpers/mappers");

const findAllTasks = async (table) => {
	try {
		const tasks = await db(table)
			.join("projects as p", {
				"t.project_id": "p.project_id",
			})
			.select(
				"task_id",
				"task_description",
				"task_notes",
				"task_completed",
				"project_name",
				"project_description"
			);
		return helper.mapIntToBool(tasks, ["task_completed"]);
	} catch (err) {
		throw new Error();
	}
};

module.exports = { findAllTasks };
