const addTaskForm = () => {
    const taskForm = document.createElement("form");
    taskForm.classList.add("task-form");
    taskForm.action="#";
    taskForm.method="post";
    const formHeader = document.createElement("h4");
    formHeader.textContent = "Add New Task";

    const taskTitle = document.createElement("input");
    taskTitle.name = "title";
    taskTitle.placeholder = "Enter New Task";
    taskTitle.type="text";
    taskTitle.required = true;

    const dueDate = document.createElement("input");
    dueDate.name = "date";
    dueDate.placeholder = "Task Due Date";
    dueDate.type="date";
    dueDate.required = true;

    const taskDescription = document.createElement("textarea");
    taskDescription.required = true;
    taskDescription.name = "description";
    taskDescription.rows = 2;
    taskDescription.cols = 10;
    taskDescription.maxLength = 50;
    taskDescription.placeholder = "Task Description";

    const submitBtn = document.createElement("button");
    submitBtn.type="submit";
    submitBtn.classList.add("add-new-task");
    submitBtn.textContent="Add";
    const cancelBtn = document.createElement("button");
    cancelBtn.classList.add("cancel-task");
    cancelBtn.textContent="Cancel";

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    buttons.appendChild(submitBtn);
    buttons.appendChild(cancelBtn);

    
    taskForm.appendChild(formHeader);
    taskForm.appendChild(taskTitle);
    taskForm.appendChild(dueDate);
    taskForm.appendChild(taskDescription);
    taskForm.appendChild(buttons);

    return taskForm;

}

export default addTaskForm;