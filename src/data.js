/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable import/prefer-default-export */

class Task {
  constructor(description) {
    this.description = description;
    this.index = 0;
    this.completed = false;
  }
}

const addTaskForm = document.querySelector('#add-task');
const data = JSON.parse(localStorage.getItem('Task-list')) || [];
addTaskForm.addEventListener('submit', () => {
  const inputTaskValue = document.querySelector('#add-task-input').value;
  const newTask = new Task(inputTaskValue);
  data.push(newTask);
  localStorage.setItem('Task-list', JSON.stringify(data));
});

const clearTask = document.querySelector('.clear-task');

clearTask.addEventListener('click', () => {
  if (data.length > 0) {
    localStorage.clear('Task-list');
    location.reload();
  } else {
    alert('Local storage is empty');
  }
});

const reload = document.querySelector('.reload');
reload.addEventListener('click', () => {
  location.reload();
});

export function getTask() {
  return data.map((task) => task);
}
