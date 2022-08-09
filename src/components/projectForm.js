const createProjectForm = () => {
    const form = document.createElement("form");
    form.classList.add("new-project");

    const projectInput = document.createElement("input");
    projectInput.name = "project";
    projectInput.placeholder = "Enter New Project Name";
    projectInput.type="text";
    projectInput.required = true;

    const submitBtn = document.createElement("button");
    submitBtn.type="submit";
    submitBtn.textContent="Create";
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel");
    cancelBtn.textContent="Cancel";

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    buttons.appendChild(submitBtn);
    buttons.appendChild(cancelBtn);

    form.appendChild(projectInput);
    form.appendChild(buttons)
    return form;
}

export default createProjectForm;