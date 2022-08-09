import projectTab from "./projectTab";
import createProjectForm from "./projectForm";

const sidebar = () => {
    const allProjects = localStorage.getItem("my_projects");

    const sidebarMain = document.createElement("div");
    sidebarMain.classList.add("side-bar");

    sidebarMain.appendChild(createProjectForm());

    const addProject= document.createElement("button");
    addProject.classList.add("add-btn");
    addProject.textContent="Create project";

    sidebarMain.appendChild(addProject)
    const allProjectsParsed = JSON.parse(allProjects);
    const defaultProject = projectTab("My Project");
    defaultProject.classList.add("active-project");
    sidebarMain.appendChild(defaultProject);
    if (allProjects) {
        allProjectsParsed.forEach(project => {
            if (project.projectName !== "My Project"){
                const otherProjects = projectTab(project.projectName);
                sidebarMain.appendChild(otherProjects);
            }
        });
    }

    return sidebarMain;
}

export default sidebar;