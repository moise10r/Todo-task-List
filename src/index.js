import './style.css';
import { getTask } from './data';

const taskList = document.querySelector('.task-list');

console.log(getTask());
// taskList.innerHTML = `<li class="flex-center">
//   <span class="title">Today's To Do</span>
//   <span><i class="fas fa-sync-alt"></i></span>
// </li>
// <li class="add-task flex-center">
//   <form action="">
//     <input type="text" placeholder="Add to your list" />
//   </form>
// </li>
// <li class="task flex-center">
//   <span class="left">
//     <input id="fixed" type="checkbox" />
//     <label for="fixed">Fix linters</label>
//   </span>
//   <span class="right">
//     <i class="fas fa-ellipsis-v"></i>
//   </span>
// </li>`;

const taskNode = document.querySelector('.task');

// getTask().forEach((task) => {
// 	taskNode.innerHTML = `<li class="task flex-center">
//   <span class="left">
//     <input id="fixed" type="checkbox" />
//     <label for="fixed">${task.description}</label>
//   </span>
//   <span class="right">
//     <i class="fas fa-ellipsis-v"></i>
//   </span>
// </li>`;
// 	taskList.appendChild(taskNode);
// });
