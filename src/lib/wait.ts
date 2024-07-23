export const wait = async (ms: number = 1000) => {
	let timeId: NodeJS.Timeout;
	return new Promise(resolve => {
		clearTimeout(timeId);
		timeId = setTimeout(resolve, ms);
	});
};
