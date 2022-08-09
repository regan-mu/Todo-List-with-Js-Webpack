import sidebar from "./sidebar";
import todoTasks from "./tasksSection";
const todoBody = () => {
    const projectSection = document.createElement("div");
    projectSection.classList.add("projects-main");

    projectSection.appendChild(sidebar());
    projectSection.appendChild(todoTasks());

    return projectSection;
}

export default todoBody;