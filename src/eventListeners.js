import taskCard from "./components/taskCard";
import displayTasks from "./components/displayTasks";
import deleteTask from "./components/tasksDelete";
import deleteProject from "./components/deleteProject";
// Open and Close Create Event Form
const eventListeners = () => {
    const createButton = document.querySelector(".add-btn");
    const newProject = document.querySelector(".new-project");
    const cancelButton = document.querySelector(".cancel");
    const addTask = document.querySelector(".add-task");
    const taskForm = document.querySelector(".task-form");
    const cancelTask = document.querySelector(".cancel-task");
    const projectCardsArea = document.querySelector(".project-cards");
    const projectTabs= document.querySelectorAll(".project-tabs");
    

    // Display Tasks for each project on load.
    displayTasks(projectCardsArea, taskCard);

    // Delete Task when delete button is clicked
    deleteTask();

    // Delete Entire Project when delete project is clicked
    deleteProject();

    // Show Create Project Form
    createButton.addEventListener("click", () => {
        newProject.classList.add("show-form");
    });
    // Hide Show Project Form
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        newProject.classList.remove("show-form");
    });

    // Show Add Task Form
    addTask.addEventListener("click", () => {
        taskForm.classList.add("show-task-form");
    });
    // Hide Task Form
    cancelTask.addEventListener("click", (e)=>{
        e.preventDefault();
        taskForm.classList.remove("show-task-form");
    });

    // Create New project
    newProject.addEventListener("submit", (e)=>{
        e.preventDefault();
        const project = {"projectName": e.target.project.value, tasks: [] };
        const allProjects = JSON.parse(localStorage.getItem("my_projects"));
        allProjects.push(project);
        localStorage.setItem("my_projects", JSON.stringify(allProjects));
        e.target.project.value = "";
        newProject.classList.remove("show-form");
        location.reload();
    });

    // Activate clicked project.
    projectTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const activeProject = document.querySelector(".active-project");
            if (activeProject) {
                activeProject.classList.remove("active-project");
            }
            tab.classList.add("active-project");

            // Change the Tasks displayed. Depending on clicked project.
            projectCardsArea.innerHTML = "";
            displayTasks(projectCardsArea, taskCard);
            // Activate the delete function for the clicked tab.
            deleteTask();
        });
    });

}

export default eventListeners;