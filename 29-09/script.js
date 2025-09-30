document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    
    loadTasks();

    
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask();
    });

   
    function getTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    
    function addTask() {
        const name = document.getElementById('task-name').value;
        const status = document.getElementById('task-status').value;
        const date = document.getElementById('task-date').value;
        const description = document.getElementById('task-description').value;

        const newTask = {
            id: Date.now(), 
            name,
            status,
            date,
            description
        };

        const tasks = getTasks();
        tasks.push(newTask);
        saveTasks(tasks);

        
        taskForm.reset();
        displayTasks(tasks);
    }

    
    function displayTasks(tasks) {
        
        taskList.innerHTML = '';

        if (tasks.length === 0) {
            taskList.innerHTML = '<p style="text-align: center; color: #6c757d;">Nenhuma tarefa cadastrada. Adicione uma!</p>';
            return;
        }

        tasks.forEach(task => {
            
            const listItem = document.createElement('li');
            listItem.className = `task-item status-${task.status}`; 
            listItem.dataset.id = task.id;

            
            const displayDate = task.date ? new Date(task.date).toLocaleDateString('pt-BR') : 'Não definida';

            listItem.innerHTML = `
                <div class="task-details">
                    <span class="task-name"><strong>${task.name}</strong></span> 
                    <span class="task-status-text"> (${task.status.toUpperCase()})</span>
                    <br>
                    <small>Data: ${displayDate}</small>
                    ${task.description ? `<p class="task-description">${task.description}</p>` : ''}
                </div>
            `;

            const actionsDiv = document.createElement('div');
            actionsDiv.className = 'task-actions';

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.className = 'btn-edit';
            editBtn.addEventListener('click', () => editTask(task.id));

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.className = 'btn-remove';
            removeBtn.addEventListener('click', () => removeTask(task.id));

            actionsDiv.appendChild(editBtn);
            actionsDiv.appendChild(removeBtn);

            listItem.appendChild(actionsDiv);

            taskList.appendChild(listItem);
        });
    }

    function editTask(id) {
        const tasks = getTasks();
        const task = tasks.find(t => t.id === id);
        if (task) {
           
            document.getElementById('task-name').value = task.name;
            document.getElementById('task-status').value = task.status;
            document.getElementById('task-date').value = task.date;
            document.getElementById('task-description').value = task.description;
            removeTask(id);
        }
    }

    function removeTask(id) {
        if (confirm('Tem certeza que deseja remover a tarefa?')) {
            const tasks = getTasks();
            const updatedTasks = tasks.filter(t => t.id !== id);
            saveTasks(updatedTasks);
            displayTasks(updatedTasks);
        }
    }

    function loadTasks() {
        const tasks = getTasks();
        displayTasks(tasks);
    }
});