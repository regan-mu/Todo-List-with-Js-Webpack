import Delete from "../delete.png"
const projectTab = (projectName) => {
    const tab = document.createElement("div");
    tab.id = projectName.replace(/\s/g, '-');
    tab.classList.add("project-tabs");

    const tabTitle = document.createElement("h3");
    tabTitle.textContent = `${projectName}`;
    tabTitle.classList.add = "project-title";
    tab.appendChild(tabTitle);

    const deleteBtn = new Image();
    deleteBtn.src = Delete;
    deleteBtn.classList.add("delete-project");
    tab.appendChild(deleteBtn);

    return tab;
}

export default projectTab;