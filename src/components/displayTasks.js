
const displayTasks = (cardParent, card) => {
    const projectToAdd = document.querySelector(".active-project");
    const projects = JSON.parse(localStorage.getItem("my_projects"));
    if (projectToAdd) {
        projects.forEach(project => {
            if (project.projectName === projectToAdd.id.replace(/-/g, ' ')) {
                
                project.tasks.forEach(task => {
                    cardParent.appendChild(card(task.title, task.date, task.description));
                })
            }
        }
        
    )}
    
}

export default displayTasks;