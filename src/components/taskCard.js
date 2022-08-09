const taskCard = (title, date, taskDescription) => {
    const card = document.createElement("div");
    card.classList.add("task-card");
    card.id = title.replace(/\s/g, '-')

    const cardInfo = document.createElement("div")
    cardInfo.classList.add("card-info");

    const cardTitle = document.createElement("h4");
    cardTitle.classList.add("card-title");
    cardTitle.textContent=title;
    cardInfo.appendChild(cardTitle);

    const dueDate = document.createElement("p");
    dueDate.classList.add("due-date");
    dueDate.textContent = date;
    cardInfo.appendChild(dueDate);

    const description = document.createElement("div");
    description.classList.add("description");

    const descriptionTitle = document.createElement("h6");
    descriptionTitle.textContent = "Description";
    description.appendChild(descriptionTitle)

    const descriptionContent = document.createElement("p");
    descriptionContent.textContent = taskDescription;
    description.appendChild(descriptionContent)

    cardInfo.appendChild(description);


    const cardActions = document.createElement("div");
    cardActions.classList.add("card-actions");

    // const editCard = document.createElement("button");
    // editCard.id = "edit-card";
    // editCard.textContent="Edit";
    // cardActions.appendChild(editCard);

    const deleteCard = document.createElement("button");
    deleteCard.classList.add("delete-card");
    deleteCard.textContent="Delete";
    cardActions.appendChild(deleteCard);

    card.appendChild(cardInfo);
    card.appendChild(cardActions);


    return card;

}

export default taskCard;