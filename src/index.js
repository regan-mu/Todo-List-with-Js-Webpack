import "./CSS/style.css";
import header from "./components/header";
import todoBody from "./components/todoBody";
import eventListeners from "./eventListeners";
import manageTasks from "./components/taskAdd";

// Create default Projects
const createDefaultProject = () =>{
     
    if (!localStorage.getItem("my_projects")) {
        const project = [{"projectName": "My Project", tasks: [] }];
        localStorage.setItem("my_projects", JSON.stringify(project));
    };
}

const webPage = () => {
    createDefaultProject();
    const mainBody = document.createElement("div");
    mainBody.classList.add("main");

    mainBody.appendChild(header());
    mainBody.append(todoBody());

    return mainBody;
}

document.body.appendChild(webPage());

eventListeners();
manageTasks();