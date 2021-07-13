/* eslint-disable import/prefer-default-export */
export const data = [
	{
		index: 0,
		description: 'Set up the project',
		completed: false,
	},
	{
		index: 0,
		description: 'Design the home and about pages',
		completed: false,
	},
	{
		index: 0,
		description: 'Fix linter errors',
		completed: false,
	},
];

export function getTask() {
	return data.map((task) => task);
}
