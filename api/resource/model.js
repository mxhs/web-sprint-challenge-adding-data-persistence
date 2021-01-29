// build your `Resource` model here
const db = require("../../data/dbConfig");

const findAll = (table) => db(table);

const insert = async (table, resource) => {
	try {
		await db(table).insert(resource);
		const newResource = await db(table)
			.where({
				resource_name: resource.resource_name,
			})
			.first();
		return newResource;
	} catch (err) {
		throw new Error();
	}
};

module.exports = { findAll, insert };
