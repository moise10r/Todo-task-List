/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-cycle */
import { addTask } from './updateTask';

const data = addTask();
export function getTask() {
  return data.map((task) => task);
}
