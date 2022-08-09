import addTaskForm from "./addTaskForm";
const todoTasks = () => {
    const tasksMain = document.createElement("div");
    tasksMain.classList.add("tasks-main");
    const tasksTop = document.createElement("div");
    tasksTop.classList.add("tasks-top");

    const projectName = document.createElement("h3");
    projectName.textContent = "Project Tasks";

    const addTask = document.createElement("button");
    addTask.classList.add("add-task");
    addTask.textContent="+ Add Task";
    
    tasksTop.appendChild(projectName);
    tasksTop.appendChild(addTask);
    tasksTop.appendChild(addTaskForm());

    tasksMain.appendChild(tasksTop);

    //Card
    const allTaskCards = document.createElement("div");
    allTaskCards.classList.add("project-cards");


    tasksMain.appendChild(allTaskCards)


    return tasksMain;
}

export default todoTasks;