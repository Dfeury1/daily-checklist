document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const clearBtn = document.getElementById('clear-btn');

  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (!taskText) return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.style.marginLeft = '10px';
    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  });

  clearBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
});
