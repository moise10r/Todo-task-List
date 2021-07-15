/* eslint-disable no-restricted-globals */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */

import { getTask } from './data';
import { checkbox, editTask } from './index';

export function updateTask() {
  checkbox.forEach((check) => {
    check.addEventListener('click', () => {
      editTask.forEach((task) => {
        if (check.id === task.dataset.indexNumber) {
          getTask().forEach((item) => {
            if (item.index === check.id) {
              if (item.completed) {
                item.completed = false;
                localStorage.setItem('Task-list', JSON.stringify(getTask()));
                location.reload();
              } else {
                item.completed = true;
                localStorage.setItem('Task-list', JSON.stringify(getTask()));
                location.reload();
              }
            }
          });
        }
      });
    });
  });
}

export function deleteTask() {
  const clearTask = document.querySelector('.clear-task');
  clearTask.addEventListener('click', () => {
    if (getTask().length > 0) {
      const filterCompliteTask = getTask().filter((task) => task.completed !== true);
      localStorage.setItem('Task-list', JSON.stringify(filterCompliteTask));
      location.reload();
    }
  });
}
