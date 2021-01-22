exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("resources")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("resources").insert([
				{
					resource_id: 1,
					resource_name: "Furniture Website",
					resource_description: "www.wayfair.com",
				},
				{
					resource_id: 2,
					resource_name: "Paint Skills",
					resource_description: "www.howtopaint.com",
				},
				{
					resource_id: 3,
					resource_name: "Recipe Site",
					resource_description: "Check out this site",
				},
			]);
		});
};
