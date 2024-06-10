export default function objectExcept(obj, subset) {
	if (!obj || !subset?.length) {
		return {};
	}

	const subsetObject = { ...obj };
	subset.forEach((key) => {
		if (key in subsetObject) {
			delete subsetObject[key];
		}
	});

	return subsetObject;
}
