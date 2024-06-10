export default function objectSome(obj, subset) {
	if (!obj || !subset?.length) {
		return {};
	}

	const subsetObject = {};
	subset.forEach((key) => {
		if (key in obj) {
			subsetObject[key] = obj[key];
		}
	});

	return subsetObject;
}
