export const getMonth = (offset = 0): string => {
	const today = new Date();

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const curMonthIndex = today.getMonth() + offset;

	const curMonth = monthNames[((curMonthIndex % 12) + 12) % 12];

	return curMonth;
};
