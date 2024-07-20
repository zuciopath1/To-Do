const taskInput = document.querySelector('#taskInput'); 
const addTaskBtn = document.querySelector('#addTaskBtn'); 
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <button class="completeBtn">Complete</button>
        <button class="editBtn">Edit</button>
        <button class="removeBtn">Remove</button>
    `;
    taskList.appendChild(li);

    li.querySelector('.completeBtn').addEventListener('click', () => {
        li.querySelector('span').classList.toggle('completed');
    });

    li.querySelector('.editBtn').addEventListener('click', () => {
        const newText = prompt('Edit task', li.querySelector('span').textContent);
        if (newText) {
            li.querySelector('span').textContent = newText;
        }
    });

    li.querySelector('.removeBtn').addEventListener('click', () => {
        taskList.removeChild(li);
    });
}

