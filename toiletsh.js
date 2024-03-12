
    /** @format */
    ////////////////////////////////////////////////////////////////////////////////
    // Declaring, identifying and initializing UI Variables
    ////////////////////////////////////////////////////////////////////////////////
    // This app is created by aryan vala
    const form = document.querySelector('#task-form');
    const inputTask = document.querySelector('#task');
    const filter = document.querySelector('#filter');
    const taskList = document.querySelector('.collection');
    const clearTasks = document.querySelector('.clear-btn');

    ////////////////////////////////////////////////////////////////////////////////
    // Load all event listeners
    ////////////////////////////////////////////////////////////////////////////////
    loadEventListener();

    function loadEventListener() {
        // Loads stored tasks
        document.addEventListener('DOMContentLoaded', loadTasks);
        //Add task event
        form.addEventListener('submit', addTask);
        //Remove task
        taskList.addEventListener('click', deleteTask);
        // Filter task list
        filter.addEventListener('keyup', filterTasks);
        // Clear Task List
        clearTasks.addEventListener('click', clearTaskList);
    }

    ////////////////////////////////////////////////////////////////////////////////
    // Functions
    ////////////////////////////////////////////////////////////////////////////////

    // Load tasks from local storage on page start
    function loadTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(function (task) {
            createNewTaskElement(task);
        });
    }
    //Creates li & a-Tag element and adds it to the ul
    function createNewTaskElement(task) {
        const newTask = document.createElement('li');
        newTask.className = 'collection-item';
        newTask.appendChild(document.createTextNode(task));

        // Create a stopwatch element
        const stopwatch = document.createElement('span');
        stopwatch.className = 'stopwatch';
        stopwatch.innerHTML = ' 00:00:00'; // Initial value of stopwatch

        // Append the stopwatch to the task
        newTask.appendChild(stopwatch);

        // Add delete button
        const newTaskATag = document.createElement('a');
        newTaskATag.style.cursor = 'pointer';
        newTaskATag.style.color = '#e01a4f';
        newTaskATag.className = 'delete-item secondary-content';
        newTaskATag.innerHTML = '<i class="material-icons">delete</i>';
        newTask.appendChild(newTaskATag);

        taskList.appendChild(newTask);

        // Start the stopwatch for this task
        startStopwatch(stopwatch);
    }
    // Adds a new task to the Task List
    function addTask(e) {
        if (inputTask.value === '') {
            M.toast({ html: 'Add a task', classes: 'red rounded' });
        } else {
            createNewTaskElement(inputTask.value);

            storeTaskInLocalStorage(inputTask.value);

            inputTask.value = '';
        }
        e.preventDefault();
    }
    // Saves task to local storage
    function storeTaskInLocalStorage(task) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Deletes a single task from the task list
    function deleteTask(e) {
        if (e.target.parentElement.classList.contains('delete-item')) {
            if (confirm('Are you sure? 😢')) {
                e.target.parentElement.parentElement.remove();

                removeTaskFromLocalStorage(
                    e.target.parentElement.parentElement.firstChild.textContent
                );
            }
        }
    }
    // This app is created by aryan vala

    // Delete task from local storage
    function removeTaskFromLocalStorage(taskToDelete) {
        let tasks;
        tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.forEach(function (task) {
            if (task === taskToDelete) {
                tasks.splice(tasks.indexOf(task), 1);
            }
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Filter Tasks
    function filterTasks(e) {
        const text = e.target.value.toLowerCase();
        //Iterates through each task and checks if filter input matches it
        document.querySelectorAll('.collection-item').forEach(function (task) {
            item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }

    // Deletes all tasks from taskList
    function clearTaskList() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }

    // Function to start the stopwatch
    function startStopwatch(stopwatch) {
        let startTime = new Date().getTime();

        setInterval(() => {
            let currentTime = new Date().getTime();
            let elapsedTime = currentTime - startTime;

            let hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

            // Add leading zeros to hours, minutes, and seconds if necessary
            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
    // This app is created by aryan vala

            stopwatch.innerHTML = ` ${hours}:${minutes}:${seconds}`;
        }, 1000);
    }
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
    // This app is created by aryan vala
