import displayTasks from "./displayTasks";
import taskCard from "./taskCard";
const deleteTask = ()  => {
    const parentProject = document.querySelector(".active-project").id.replace(/-/g, ' ');
    const deleteTaskBtns = document.querySelectorAll(".delete-card");
    const projectCardsArea = document.querySelector(".project-cards");
    // Delete Task
    deleteTaskBtns.forEach(delBtn => delBtn.addEventListener("click", (e) => {
        const cardId = e.target.parentNode.parentNode.id;
        const taskTitle = cardId.replace(/-/g, ' ');
        const myProjects = JSON.parse(localStorage.getItem("my_projects"));
        
        myProjects.forEach(proj => {
            if (proj.projectName === parentProject) {
                proj.tasks.forEach(projTask => {
                    if (projTask.title === taskTitle) {
                        const taskIndex = proj.tasks.indexOf(projTask);
                        proj.tasks.splice(taskIndex, 1);
                        localStorage.setItem("my_projects", JSON.stringify(myProjects));
                        // Re-render the Task cards again
                        projectCardsArea.innerHTML = "";
                        displayTasks(projectCardsArea, taskCard);
                    }
                })
            }
        })
        
    }));
}

export default deleteTask;