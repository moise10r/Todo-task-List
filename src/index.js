import './style.css';
import { getTask } from './data';

const taskList = document.querySelector('.task-list-container');

function getInputValue(task) {
  return task.description;
}

getTask().forEach((task) => {
  taskList.innerHTML += `<li class="  task flex-center">
  <span class="left flex-center">
    <input id=${task.index} type="checkbox" />
    <form class="edit-form" action="/">
    <input data-index-number=${task.index} value='${getInputValue(task)}' class="edit-task"></form>
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
  </span>
</li>`;
});

const editTask = document.querySelectorAll('.edit-task');
const editForm = document.querySelectorAll('.edit-form');

editForm.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
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
