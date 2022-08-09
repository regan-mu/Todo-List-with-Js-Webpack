const deleteProject = () => {
    const deleteProjectBtn = document.querySelectorAll(".delete-project");

    deleteProjectBtn.forEach(deleteBtn => {
        deleteBtn.addEventListener("click", e => {
            const projectToDelete = e.target.parentNode.id.replace(/-/g, ' ');
            const allProjects = JSON.parse(localStorage.getItem("my_projects"));
            allProjects.forEach(project => {
                if (project.projectName === projectToDelete) {
                    const projectToDeleteIndex = allProjects.indexOf(project);
                    allProjects.splice(projectToDeleteIndex, 1);
                    localStorage.setItem("my_projects", JSON.stringify(allProjects));
                    location.reload();   
                }
            });
        });
    });
}

export default deleteProject;