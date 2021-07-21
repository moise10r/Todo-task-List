/**
 * @jest-environment jsdom
 */

import { addTask, deleteOne } from '../src/controllers';

// jest.mock('./test.html');
document.body.innerHTML = '<div>' + ' <ul class="task-list-container"></li>' + '</div>';

describe('Add task', () => {
  it('should return data with the added element', () => {
    const result = addTask();
    expect(result.length).toBe(1);
  });
});