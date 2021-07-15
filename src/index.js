/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import './style.css';
import { getTask } from './data';
import { updateTask, deleteTask } from './updateTask';
import { dragDrop } from './dragDrop';

export const taskList = document.querySelector('.task-list-container');

function getInputValue(task) {
  return task.description;
}
getTask().forEach((task) => {
  taskList.innerHTML += `<li class="container task flex-center" draggable="true">
  <span class="left flex-center">
    <input id=${task.index} type="checkbox" ${
  task.completed ? 'checked' : ''
}  class="checkbox" />
    <form class="edit-form" action="/">
    <input data-index-number=${task.index} value='${getInputValue(
  task,
)}' class="${task.completed ? 'edit-task disabled' : 'edit-task'}" ${
  task.completed ? 'disabled' : ''
} ></form>
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
  </span>
</li>`;
});

export const task = document.querySelectorAll('.task');
export const editTask = document.querySelectorAll('.edit-task');
const editForm = document.querySelectorAll('.edit-form');

editForm.forEach((form) => {
  form.addEventListener('submit', () => {
    editTask.forEach((taskList) => {
      getTask().forEach((task) => {
        if (taskList.dataset.indexNumber === task.index) {
          task.description = taskList.value;
          localStorage.setItem('Task-list', JSON.stringify(getTask()));
        }
      });
    });
  });
});

export const checkbox = document.querySelectorAll('.checkbox');
window.addEventListener('load', () => {
  updateTask();
  dragDrop();
});

const reload = document.querySelector('.reload');
reload.addEventListener('click', () => {
  location.reload();
});

deleteTask();