exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("tasks")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("tasks").insert([
				{
					task_id: 1,
					task_description: "Paint Walls",
					task_notes: "",
					task_completed: false,
					project_id: 1,
				},
				{
					task_id: 2,
					task_description: "Buy Furniture",
					task_notes: "",
					task_completed: false,
					project_id: 1,
				},
				{
					task_id: 3,
					task_description: "Boil Water",
					task_notes: "",
					task_completed: false,
					project_id: 2,
				},
			]);
		});
};
