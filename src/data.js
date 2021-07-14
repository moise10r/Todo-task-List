/* eslint-disable import/prefer-default-export */
export const data = [
  {
    index: 0,
    description: 'Set up the project',
    completed: false,
  },
  {
    index: 1,
    description: 'Design the home and about pages',
    completed: false,
  },
  {
    index: 2,
    description: 'Fix linter errors',
    completed: false,
  },
];

class Task {
  constructor(description) {
    this.description = description;
    this.index = 0;
    this.completed = false;
  }
}

export function getTask() {
  return data.map((task) => task);
}
