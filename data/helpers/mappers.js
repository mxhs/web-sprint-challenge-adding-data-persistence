const mapIntToBool = (array, keyToChange) => {
	return array.map((element) => {
		const obj = {};
		for (const key in element) {
			if (keyToChange.includes(key)) {
				obj[key] = element[key] === 1 ? true : false;
			} else {
				obj[key] = element[key];
			}
		}
		return obj;
	});
};

module.exports = { mapIntToBool };
