import './style.css';
import { getTask } from './data';

const taskList = document.querySelector('.task-list-container');
console.log(taskList);

console.log(getTask());

getTask().forEach((task) => {
	taskList.innerHTML += `<li class=" container task flex-center">
  <span class="left">
    <input id=${task.index} type="checkbox" />
    <label for=${task.index}>${task.description}</label>
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
  </span>
</li>`;
});
