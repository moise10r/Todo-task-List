import './style.css';
import { getTask } from './data';

const taskList = document.querySelector('.task-list-container');

getTask().forEach((task) => {
  taskList.innerHTML += `<li class="  task flex-center">
  <span class="left flex-center">
    <input id=${task.index} type="checkbox" />
    <input value='${task.description || ''}' class="edit-task">
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
  </span>
</li>`;
});
