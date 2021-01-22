exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("projects")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("projects").insert([
				{
					project_id: 1,
					project_name: "Redesign Living Room",
					project_description: "Making Living Room Prettier",
					project_completed: false,
				},
				{
					project_id: 2,
					project_name: "Cook Dinner",
					project_description: "Make it for four",
					project_completed: false,
				},
				{
					project_id: 3,
					project_name: "Finish Assignment",
					project_description: "",
					project_completed: true,
				},
			]);
		});
};
