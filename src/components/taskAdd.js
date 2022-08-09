import displayTasks from "./displayTasks";
import taskCard from "./taskCard";
import deleteTask from "./tasksDelete";
const manageTasks = () => {
    const tasksForm = document.querySelector(".task-form");
    const projectCardsArea = document.querySelector(".project-cards");

    // Append New Task to the Active Project
    const addTaskToProject = taskInfo => {
        const projects = JSON.parse(localStorage.getItem("my_projects"));
        const projectToAdd = document.querySelector(".active-project");
        projects.forEach(project => {
            if (project.projectName === projectToAdd.id.replace(/-/g, ' ')) {
                const projectTasks = project.tasks;
                projectTasks.push(taskInfo);
            }
            localStorage.setItem("my_projects", JSON.stringify(projects));
        });
    }
    
    // Listen to New Task Form Submissions
    tasksForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const date = e.target.date.value;
        const description = e.target.description.value;
        const taskData = {title, date, description};
        addTaskToProject(taskData);
        tasksForm.classList.remove("show-task-form");
        projectCardsArea.innerHTML = "";
        displayTasks(projectCardsArea, taskCard);

        // Reset form
        e.target.title.value = "";
        e.target.date.value = "";
        e.target.description.value = "";

        // Reset the delete Task Button;
        deleteTask();
    });
}


export default manageTasks;