/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/addTaskForm.js":
/*!***************************************!*\
  !*** ./src/components/addTaskForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addTaskForm = function addTaskForm() {
  var taskForm = document.createElement("form");
  taskForm.classList.add("task-form");
  taskForm.action = "#";
  taskForm.method = "post";
  var formHeader = document.createElement("h4");
  formHeader.textContent = "Add New Task";
  var taskTitle = document.createElement("input");
  taskTitle.name = "title";
  taskTitle.placeholder = "Enter New Task";
  taskTitle.type = "text";
  taskTitle.required = true;
  var dueDate = document.createElement("input");
  dueDate.name = "date";
  dueDate.placeholder = "Task Due Date";
  dueDate.type = "date";
  dueDate.required = true;
  var taskDescription = document.createElement("textarea");
  taskDescription.required = true;
  taskDescription.name = "description";
  taskDescription.rows = 2;
  taskDescription.cols = 10;
  taskDescription.maxLength = 50;
  taskDescription.placeholder = "Task Description";
  var submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.classList.add("add-new-task");
  submitBtn.textContent = "Add";
  var cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-task");
  cancelBtn.textContent = "Cancel";
  var buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.appendChild(submitBtn);
  buttons.appendChild(cancelBtn);
  taskForm.appendChild(formHeader);
  taskForm.appendChild(taskTitle);
  taskForm.appendChild(dueDate);
  taskForm.appendChild(taskDescription);
  taskForm.appendChild(buttons);
  return taskForm;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTaskForm);

/***/ }),

/***/ "./src/components/deleteProject.js":
/*!*****************************************!*\
  !*** ./src/components/deleteProject.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var deleteProject = function deleteProject() {
  var deleteProjectBtn = document.querySelectorAll(".delete-project");
  deleteProjectBtn.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (e) {
      var projectToDelete = e.target.parentNode.id.replace(/-/g, ' ');
      var allProjects = JSON.parse(localStorage.getItem("my_projects"));
      allProjects.forEach(function (project) {
        if (project.projectName === projectToDelete) {
          var projectToDeleteIndex = allProjects.indexOf(project);
          allProjects.splice(projectToDeleteIndex, 1);
          localStorage.setItem("my_projects", JSON.stringify(allProjects));
          location.reload();
        }
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteProject);

/***/ }),

/***/ "./src/components/displayTasks.js":
/*!****************************************!*\
  !*** ./src/components/displayTasks.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var displayTasks = function displayTasks(cardParent, card) {
  var projectToAdd = document.querySelector(".active-project");
  var projects = JSON.parse(localStorage.getItem("my_projects"));

  if (projectToAdd) {
    projects.forEach(function (project) {
      if (project.projectName === projectToAdd.id.replace(/-/g, ' ')) {
        project.tasks.forEach(function (task) {
          cardParent.appendChild(card(task.title, task.date, task.description));
        });
      }
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasks);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var header = function header() {
  var header = document.createElement("div");
  header.classList.add("header");
  var logo = document.createElement("div");
  logo.classList.add("logo");
  var logoText = document.createElement("h1");
  logoText.textContent = "2_DO. . .";
  logo.appendChild(logoText);
  header.appendChild(logo);
  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ }),

/***/ "./src/components/projectForm.js":
/*!***************************************!*\
  !*** ./src/components/projectForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createProjectForm = function createProjectForm() {
  var form = document.createElement("form");
  form.classList.add("new-project");
  var projectInput = document.createElement("input");
  projectInput.name = "project";
  projectInput.placeholder = "Enter New Project Name";
  projectInput.type = "text";
  projectInput.required = true;
  var submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Create";
  var cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel");
  cancelBtn.textContent = "Cancel";
  var buttons = document.createElement("div");
  buttons.classList.add("buttons");
  buttons.appendChild(submitBtn);
  buttons.appendChild(cancelBtn);
  form.appendChild(projectInput);
  form.appendChild(buttons);
  return form;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectForm);

/***/ }),

/***/ "./src/components/projectTab.js":
/*!**************************************!*\
  !*** ./src/components/projectTab.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _delete_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../delete.png */ "./src/delete.png");


var projectTab = function projectTab(projectName) {
  var tab = document.createElement("div");
  tab.id = projectName.replace(/\s/g, '-');
  tab.classList.add("project-tabs");
  var tabTitle = document.createElement("h3");
  tabTitle.textContent = "".concat(projectName);
  tabTitle.classList.add = "project-title";
  tab.appendChild(tabTitle);
  var deleteBtn = new Image();
  deleteBtn.src = _delete_png__WEBPACK_IMPORTED_MODULE_0__;
  deleteBtn.classList.add("delete-project");
  tab.appendChild(deleteBtn);
  return tab;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectTab);

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectTab */ "./src/components/projectTab.js");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectForm */ "./src/components/projectForm.js");



var sidebar = function sidebar() {
  var allProjects = localStorage.getItem("my_projects");
  var sidebarMain = document.createElement("div");
  sidebarMain.classList.add("side-bar");
  sidebarMain.appendChild((0,_projectForm__WEBPACK_IMPORTED_MODULE_1__["default"])());
  var addProject = document.createElement("button");
  addProject.classList.add("add-btn");
  addProject.textContent = "Create project";
  sidebarMain.appendChild(addProject);
  var allProjectsParsed = JSON.parse(allProjects);
  var defaultProject = (0,_projectTab__WEBPACK_IMPORTED_MODULE_0__["default"])("My Project");
  defaultProject.classList.add("active-project");
  sidebarMain.appendChild(defaultProject);

  if (allProjects) {
    allProjectsParsed.forEach(function (project) {
      if (project.projectName !== "My Project") {
        var otherProjects = (0,_projectTab__WEBPACK_IMPORTED_MODULE_0__["default"])(project.projectName);
        sidebarMain.appendChild(otherProjects);
      }
    });
  }

  return sidebarMain;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);

/***/ }),

/***/ "./src/components/taskAdd.js":
/*!***********************************!*\
  !*** ./src/components/taskAdd.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/components/displayTasks.js");
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCard */ "./src/components/taskCard.js");
/* harmony import */ var _tasksDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksDelete */ "./src/components/tasksDelete.js");




var manageTasks = function manageTasks() {
  var tasksForm = document.querySelector(".task-form");
  var projectCardsArea = document.querySelector(".project-cards"); // Append New Task to the Active Project

  var addTaskToProject = function addTaskToProject(taskInfo) {
    var projects = JSON.parse(localStorage.getItem("my_projects"));
    var projectToAdd = document.querySelector(".active-project");
    projects.forEach(function (project) {
      if (project.projectName === projectToAdd.id.replace(/-/g, ' ')) {
        var projectTasks = project.tasks;
        projectTasks.push(taskInfo);
      }

      localStorage.setItem("my_projects", JSON.stringify(projects));
    });
  }; // Listen to New Task Form Submissions


  tasksForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var title = e.target.title.value;
    var date = e.target.date.value;
    var description = e.target.description.value;
    var taskData = {
      title: title,
      date: date,
      description: description
    };
    addTaskToProject(taskData);
    tasksForm.classList.remove("show-task-form");
    projectCardsArea.innerHTML = "";
    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(projectCardsArea, _taskCard__WEBPACK_IMPORTED_MODULE_1__["default"]); // Reset form

    e.target.title.value = "";
    e.target.date.value = "";
    e.target.description.value = ""; // Reset the delete Task Button;

    (0,_tasksDelete__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manageTasks);

/***/ }),

/***/ "./src/components/taskCard.js":
/*!************************************!*\
  !*** ./src/components/taskCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var taskCard = function taskCard(title, date, taskDescription) {
  var card = document.createElement("div");
  card.classList.add("task-card");
  card.id = title.replace(/\s/g, '-');
  var cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  var cardTitle = document.createElement("h4");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = title;
  cardInfo.appendChild(cardTitle);
  var dueDate = document.createElement("p");
  dueDate.classList.add("due-date");
  dueDate.textContent = date;
  cardInfo.appendChild(dueDate);
  var description = document.createElement("div");
  description.classList.add("description");
  var descriptionTitle = document.createElement("h6");
  descriptionTitle.textContent = "Description";
  description.appendChild(descriptionTitle);
  var descriptionContent = document.createElement("p");
  descriptionContent.textContent = taskDescription;
  description.appendChild(descriptionContent);
  cardInfo.appendChild(description);
  var cardActions = document.createElement("div");
  cardActions.classList.add("card-actions"); // const editCard = document.createElement("button");
  // editCard.id = "edit-card";
  // editCard.textContent="Edit";
  // cardActions.appendChild(editCard);

  var deleteCard = document.createElement("button");
  deleteCard.classList.add("delete-card");
  deleteCard.textContent = "Delete";
  cardActions.appendChild(deleteCard);
  card.appendChild(cardInfo);
  card.appendChild(cardActions);
  return card;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCard);

/***/ }),

/***/ "./src/components/tasksDelete.js":
/*!***************************************!*\
  !*** ./src/components/tasksDelete.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/components/displayTasks.js");
/* harmony import */ var _taskCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskCard */ "./src/components/taskCard.js");



var deleteTask = function deleteTask() {
  var parentProject = document.querySelector(".active-project").id.replace(/-/g, ' ');
  var deleteTaskBtns = document.querySelectorAll(".delete-card");
  var projectCardsArea = document.querySelector(".project-cards"); // Delete Task

  deleteTaskBtns.forEach(function (delBtn) {
    return delBtn.addEventListener("click", function (e) {
      var cardId = e.target.parentNode.parentNode.id;
      var taskTitle = cardId.replace(/-/g, ' ');
      var myProjects = JSON.parse(localStorage.getItem("my_projects"));
      myProjects.forEach(function (proj) {
        if (proj.projectName === parentProject) {
          proj.tasks.forEach(function (projTask) {
            if (projTask.title === taskTitle) {
              var taskIndex = proj.tasks.indexOf(projTask);
              proj.tasks.splice(taskIndex, 1);
              localStorage.setItem("my_projects", JSON.stringify(myProjects)); // Re-render the Task cards again

              projectCardsArea.innerHTML = "";
              (0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(projectCardsArea, _taskCard__WEBPACK_IMPORTED_MODULE_1__["default"]);
            }
          });
        }
      });
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);

/***/ }),

/***/ "./src/components/tasksSection.js":
/*!****************************************!*\
  !*** ./src/components/tasksSection.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTaskForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTaskForm */ "./src/components/addTaskForm.js");


var todoTasks = function todoTasks() {
  var tasksMain = document.createElement("div");
  tasksMain.classList.add("tasks-main");
  var tasksTop = document.createElement("div");
  tasksTop.classList.add("tasks-top");
  var projectName = document.createElement("h3");
  projectName.textContent = "Project Tasks";
  var addTask = document.createElement("button");
  addTask.classList.add("add-task");
  addTask.textContent = "+ Add Task";
  tasksTop.appendChild(projectName);
  tasksTop.appendChild(addTask);
  tasksTop.appendChild((0,_addTaskForm__WEBPACK_IMPORTED_MODULE_0__["default"])());
  tasksMain.appendChild(tasksTop); //Card

  var allTaskCards = document.createElement("div");
  allTaskCards.classList.add("project-cards");
  tasksMain.appendChild(allTaskCards);
  return tasksMain;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoTasks);

/***/ }),

/***/ "./src/components/todoBody.js":
/*!************************************!*\
  !*** ./src/components/todoBody.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _tasksSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasksSection */ "./src/components/tasksSection.js");



var todoBody = function todoBody() {
  var projectSection = document.createElement("div");
  projectSection.classList.add("projects-main");
  projectSection.appendChild((0,_sidebar__WEBPACK_IMPORTED_MODULE_0__["default"])());
  projectSection.appendChild((0,_tasksSection__WEBPACK_IMPORTED_MODULE_1__["default"])());
  return projectSection;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoBody);

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_taskCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/taskCard */ "./src/components/taskCard.js");
/* harmony import */ var _components_displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/displayTasks */ "./src/components/displayTasks.js");
/* harmony import */ var _components_tasksDelete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tasksDelete */ "./src/components/tasksDelete.js");
/* harmony import */ var _components_deleteProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/deleteProject */ "./src/components/deleteProject.js");



 // Open and Close Create Event Form

var eventListeners = function eventListeners() {
  var createButton = document.querySelector(".add-btn");
  var newProject = document.querySelector(".new-project");
  var cancelButton = document.querySelector(".cancel");
  var addTask = document.querySelector(".add-task");
  var taskForm = document.querySelector(".task-form");
  var cancelTask = document.querySelector(".cancel-task");
  var projectCardsArea = document.querySelector(".project-cards");
  var projectTabs = document.querySelectorAll(".project-tabs"); // Display Tasks for each project on load.

  (0,_components_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(projectCardsArea, _components_taskCard__WEBPACK_IMPORTED_MODULE_0__["default"]); // Delete Task when delete button is clicked

  (0,_components_tasksDelete__WEBPACK_IMPORTED_MODULE_2__["default"])(); // Delete Entire Project when delete project is clicked

  (0,_components_deleteProject__WEBPACK_IMPORTED_MODULE_3__["default"])(); // Show Create Project Form

  createButton.addEventListener("click", function () {
    newProject.classList.add("show-form");
  }); // Hide Show Project Form

  cancelButton.addEventListener("click", function (e) {
    e.preventDefault();
    newProject.classList.remove("show-form");
  }); // Show Add Task Form

  addTask.addEventListener("click", function () {
    taskForm.classList.add("show-task-form");
  }); // Hide Task Form

  cancelTask.addEventListener("click", function (e) {
    e.preventDefault();
    taskForm.classList.remove("show-task-form");
  }); // Create New project

  newProject.addEventListener("submit", function (e) {
    e.preventDefault();
    var project = {
      "projectName": e.target.project.value,
      tasks: []
    };
    var allProjects = JSON.parse(localStorage.getItem("my_projects"));
    allProjects.push(project);
    localStorage.setItem("my_projects", JSON.stringify(allProjects));
    e.target.project.value = "";
    newProject.classList.remove("show-form");
    location.reload();
  }); // Activate clicked project.

  projectTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var activeProject = document.querySelector(".active-project");

      if (activeProject) {
        activeProject.classList.remove("active-project");
      }

      tab.classList.add("active-project"); // Change the Tasks displayed. Depending on clicked project.

      projectCardsArea.innerHTML = "";
      (0,_components_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(projectCardsArea, _components_taskCard__WEBPACK_IMPORTED_MODULE_0__["default"]); // Activate the delete function for the clicked tab.

      (0,_components_tasksDelete__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventListeners);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Mouse+Memoirs&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(209, 209, 209);\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.main {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n    overflow-y: hidden;\r\n}\r\n.main .header {\r\n    width: 100%;\r\n    height: 7rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: #FFC54D;\r\n    font-family: 'Mouse Memoirs', sans-serif;\r\n}\r\n\r\n.main .header .logo {\r\n    width: 100%;\r\n    padding: 16px 32px;\r\n    font-size: 2rem;\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\n.main .projects-main {\r\n    position: relative;\r\n    width: 100%;\r\n    height: calc(100vh - 7rem);\r\n    display: grid;\r\n    grid-template: repeat(1, 1fr)  / 250px 1fr;\r\n}\r\n.main .projects-main .side-bar {\r\n    padding: 32px 0;\r\n    position: relative;\r\n    background-color: #FFC54D;\r\n}\r\n.main .projects-main .side-bar .project-tabs {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 5px 0 0;\r\n    padding: 0 8px 0 0;\r\n    height: 48px;\r\n}\r\n.main .projects-main .side-bar .project-tabs .delete-project {\r\n    width: 24px;\r\n    height: 24px;\r\n    padding: 6px;\r\n    border-left: 1px solid #9d9d9d;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n/* Hide the delete project button for the default project */\r\n.main .projects-main .side-bar #My-Project > .delete-project {\r\n    display: none;\r\n}\r\n.main .projects-main .side-bar h3 {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    padding: 16px 8px;\r\n    width: 80%;\r\n    font-weight: 400;\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n}\r\n.main .projects-main .side-bar #My-Project h3::after {\r\n    content: \"default\";\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 5px;\r\n    position: absolute;\r\n    color: #BD4291;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    text-decoration:underline;\r\n}\r\n.main .projects-main .side-bar .add-btn {\r\n    display: block;\r\n    width: 80%;\r\n    margin: 0 auto 32px;\r\n    text-align: center;\r\n    height: 32px;\r\n    background-color: #BD4291;\r\n    border: none;\r\n    color: #fff;\r\n}\r\n.main .projects-main .side-bar .active-project {\r\n    background-color: rgb(209, 209, 209);\r\n}\r\n\r\n.main .projects-main .side-bar .new-project {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -110%;\r\n    width: 100%; \r\n    height: auto;\r\n    padding: 32px 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(156, 156, 156);\r\n    row-gap: 32px;\r\n    left: -110%;\r\n    transition: all 0.4s linear;\r\n    z-index: 4;\r\n}\r\n.main .projects-main .side-bar .new-project.show-form {\r\n    left: 0;\r\n}\r\n\r\n.main .projects-main .side-bar .new-project input {\r\n    width: 80%;\r\n    height: 32px;\r\n    outline: none;\r\n    background-color: #fff;\r\n    border: 1px solid #FFC54D;\r\n    border-radius: 5px;\r\n    padding: 0 12px;\r\n}\r\n.main .projects-main .side-bar .new-project input::placeholder{\r\n    font-weight: bold;\r\n}\r\n.main .projects-main .side-bar .new-project .buttons {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 80%;\r\n}\r\n.main .projects-main .side-bar .new-project .buttons button {\r\n    padding: 8px 16px;\r\n    background-color: #53BF9D;\r\n    border: none;\r\n}\r\n.main .projects-main .side-bar .new-project .buttons button.cancel {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.main .projects-main .tasks-main {\r\n    position: relative;\r\n    width: 100%; \r\n    height: 100%;\r\n    padding: 32px 16px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 48px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 0.2px solid rgb(160, 160, 160);\r\n    padding: 0 16px 16px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top h3 {\r\n    position: relative;\r\n    font-weight: 500;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1.5px;\r\n    font-size: 1.4rem;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .add-task {\r\n    padding: 12px 32px;\r\n    font-weight: bold;\r\n    letter-spacing: 1.3px;\r\n    border: none;\r\n    background-color: #53BF9D;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form {\r\n    position: absolute;\r\n    width: 300px;\r\n    height: auto;\r\n    top: 100%;\r\n    right: 16px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    z-index: 4;\r\n    background-color: #FFC54D;\r\n    padding: 32px 16px;\r\n    transform: scale(0);\r\n    transition: all 0.3s ease;\r\n    transform-origin: top right;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form.show-task-form {\r\n    transform: scale(1);\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form h4 {\r\n    font-weight: 500;\r\n    margin: 0 0 16px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form input {\r\n    width: 100%;\r\n    height: 32px;\r\n    outline: none;\r\n    background-color: #fff;\r\n    border: 1px solid #FFC54D;\r\n    border-radius: 5px;\r\n    padding: 0 12px;\r\n    margin: 0 0 6px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form input::placeholder {\r\n    font-weight: bold;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form textarea {\r\n    width: 100%;\r\n    height: 64px;\r\n    outline: none;\r\n    background-color: #fff;\r\n    border: 1px solid #FFC54D;\r\n    border-radius: 5px;\r\n    padding: 0 12px;\r\n    margin: 0 0 6px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form .buttons {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    padding: 12px 0 0;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form .buttons button {\r\n    padding: 8px 16px;\r\n    background-color: #53BF9D;\r\n    border: none;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form .buttons button.cancel-task {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n.main .projects-main .tasks-main .project-cards {\r\n    padding: 0 16px;\r\n    position: relative;\r\n    margin: 32px 0 0;\r\n    height: calc(100vh - 12rem);\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template: repeat(1, 150px) / repeat(3, 1fr);\r\n    grid-auto-rows: 150px;\r\n    gap: 32px;\r\n    justify-content: space-evenly;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card {\r\n    position: relative;\r\n    padding: 16px;\r\n    display: grid;\r\n    grid-template: 1fr / 3fr 1fr;\r\n    background-color: rgb(240, 240, 240);\r\n    transition: transform 0.3s ease;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 5px;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #FFC54D;\r\n    transition: transform 0.2s linear 0.2s;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card:hover {\r\n    transform: scale(1.05);\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info h4 {\r\n    font-weight: 400;\r\n    font-size: 1.2rem;\r\n    margin: 0 0 10px;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info p {\r\n    font-weight: 300;\r\n    font-size: 0.8rem;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info .description {\r\n    margin: 10px 0 0;\r\n\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info .description h6 {\r\n    font-weight: bold;\r\n    letter-spacing: 1.2px;\r\n    margin: 0 0 5px;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info .description p {\r\n    font-size: 0.7rem;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-actions {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 12px;\r\n    font-size: 0.8rem;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-actions button {\r\n    padding: 6px 0;\r\n    background-color: #9d9d9d;\r\n    border: none;\r\n    color: white;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./src/CSS/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Mouse+Memoirs&display=swap');\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(209, 209, 209);\r\n    font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.main {\r\n    width: 100%;\r\n    height: auto;\r\n    position: relative;\r\n    overflow-y: hidden;\r\n}\r\n.main .header {\r\n    width: 100%;\r\n    height: 7rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    color: #FFC54D;\r\n    font-family: 'Mouse Memoirs', sans-serif;\r\n}\r\n\r\n.main .header .logo {\r\n    width: 100%;\r\n    padding: 16px 32px;\r\n    font-size: 2rem;\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\n.main .projects-main {\r\n    position: relative;\r\n    width: 100%;\r\n    height: calc(100vh - 7rem);\r\n    display: grid;\r\n    grid-template: repeat(1, 1fr)  / 250px 1fr;\r\n}\r\n.main .projects-main .side-bar {\r\n    padding: 32px 0;\r\n    position: relative;\r\n    background-color: #FFC54D;\r\n}\r\n.main .projects-main .side-bar .project-tabs {\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 5px 0 0;\r\n    padding: 0 8px 0 0;\r\n    height: 48px;\r\n}\r\n.main .projects-main .side-bar .project-tabs .delete-project {\r\n    width: 24px;\r\n    height: 24px;\r\n    padding: 6px;\r\n    border-left: 1px solid #9d9d9d;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n/* Hide the delete project button for the default project */\r\n.main .projects-main .side-bar #My-Project > .delete-project {\r\n    display: none;\r\n}\r\n.main .projects-main .side-bar h3 {\r\n    position: relative;\r\n    margin: 0 auto;\r\n    padding: 16px 8px;\r\n    width: 80%;\r\n    font-weight: 400;\r\n    text-transform: capitalize;\r\n    cursor: pointer;\r\n}\r\n.main .projects-main .side-bar #My-Project h3::after {\r\n    content: \"default\";\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    right: 5px;\r\n    position: absolute;\r\n    color: #BD4291;\r\n    font-size: 10px;\r\n    font-weight: 500;\r\n    text-decoration:underline;\r\n}\r\n.main .projects-main .side-bar .add-btn {\r\n    display: block;\r\n    width: 80%;\r\n    margin: 0 auto 32px;\r\n    text-align: center;\r\n    height: 32px;\r\n    background-color: #BD4291;\r\n    border: none;\r\n    color: #fff;\r\n}\r\n.main .projects-main .side-bar .active-project {\r\n    background-color: rgb(209, 209, 209);\r\n}\r\n\r\n.main .projects-main .side-bar .new-project {\r\n    position: absolute;\r\n    top: 0;\r\n    left: -110%;\r\n    width: 100%; \r\n    height: auto;\r\n    padding: 32px 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: rgb(156, 156, 156);\r\n    row-gap: 32px;\r\n    left: -110%;\r\n    transition: all 0.4s linear;\r\n    z-index: 4;\r\n}\r\n.main .projects-main .side-bar .new-project.show-form {\r\n    left: 0;\r\n}\r\n\r\n.main .projects-main .side-bar .new-project input {\r\n    width: 80%;\r\n    height: 32px;\r\n    outline: none;\r\n    background-color: #fff;\r\n    border: 1px solid #FFC54D;\r\n    border-radius: 5px;\r\n    padding: 0 12px;\r\n}\r\n.main .projects-main .side-bar .new-project input::placeholder{\r\n    font-weight: bold;\r\n}\r\n.main .projects-main .side-bar .new-project .buttons {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 80%;\r\n}\r\n.main .projects-main .side-bar .new-project .buttons button {\r\n    padding: 8px 16px;\r\n    background-color: #53BF9D;\r\n    border: none;\r\n}\r\n.main .projects-main .side-bar .new-project .buttons button.cancel {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.main .projects-main .tasks-main {\r\n    position: relative;\r\n    width: 100%; \r\n    height: 100%;\r\n    padding: 32px 16px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 48px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom: 0.2px solid rgb(160, 160, 160);\r\n    padding: 0 16px 16px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top h3 {\r\n    position: relative;\r\n    font-weight: 500;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1.5px;\r\n    font-size: 1.4rem;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .add-task {\r\n    padding: 12px 32px;\r\n    font-weight: bold;\r\n    letter-spacing: 1.3px;\r\n    border: none;\r\n    background-color: #53BF9D;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form {\r\n    position: absolute;\r\n    width: 300px;\r\n    height: auto;\r\n    top: 100%;\r\n    right: 16px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    z-index: 4;\r\n    background-color: #FFC54D;\r\n    padding: 32px 16px;\r\n    transform: scale(0);\r\n    transition: all 0.3s ease;\r\n    transform-origin: top right;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form.show-task-form {\r\n    transform: scale(1);\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form h4 {\r\n    font-weight: 500;\r\n    margin: 0 0 16px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form input {\r\n    width: 100%;\r\n    height: 32px;\r\n    outline: none;\r\n    background-color: #fff;\r\n    border: 1px solid #FFC54D;\r\n    border-radius: 5px;\r\n    padding: 0 12px;\r\n    margin: 0 0 6px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form input::placeholder {\r\n    font-weight: bold;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form textarea {\r\n    width: 100%;\r\n    height: 64px;\r\n    outline: none;\r\n    background-color: #fff;\r\n    border: 1px solid #FFC54D;\r\n    border-radius: 5px;\r\n    padding: 0 12px;\r\n    margin: 0 0 6px;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form .buttons {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    width: 100%;\r\n    padding: 12px 0 0;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form .buttons button {\r\n    padding: 8px 16px;\r\n    background-color: #53BF9D;\r\n    border: none;\r\n}\r\n.main .projects-main .tasks-main .tasks-top .task-form .buttons button.cancel-task {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n.main .projects-main .tasks-main .project-cards {\r\n    padding: 0 16px;\r\n    position: relative;\r\n    margin: 32px 0 0;\r\n    height: calc(100vh - 12rem);\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template: repeat(1, 150px) / repeat(3, 1fr);\r\n    grid-auto-rows: 150px;\r\n    gap: 32px;\r\n    justify-content: space-evenly;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card {\r\n    position: relative;\r\n    padding: 16px;\r\n    display: grid;\r\n    grid-template: 1fr / 3fr 1fr;\r\n    background-color: rgb(240, 240, 240);\r\n    transition: transform 0.3s ease;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 5px;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #FFC54D;\r\n    transition: transform 0.2s linear 0.2s;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card:hover {\r\n    transform: scale(1.05);\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info h4 {\r\n    font-weight: 400;\r\n    font-size: 1.2rem;\r\n    margin: 0 0 10px;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info p {\r\n    font-weight: 300;\r\n    font-size: 0.8rem;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info .description {\r\n    margin: 10px 0 0;\r\n\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info .description h6 {\r\n    font-weight: bold;\r\n    letter-spacing: 1.2px;\r\n    margin: 0 0 5px;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-info .description p {\r\n    font-size: 0.7rem;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-actions {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    row-gap: 12px;\r\n    font-size: 0.8rem;\r\n}\r\n.main .projects-main .tasks-main .project-cards .task-card .card-actions button {\r\n    padding: 6px 0;\r\n    background-color: #9d9d9d;\r\n    border: none;\r\n    color: white;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/CSS/style.css":
/*!***************************!*\
  !*** ./src/CSS/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/CSS/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/delete.png":
/*!************************!*\
  !*** ./src/delete.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf3c084533db8e882903.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSS_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSS/style.css */ "./src/CSS/style.css");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_todoBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todoBody */ "./src/components/todoBody.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventListeners */ "./src/eventListeners.js");
/* harmony import */ var _components_taskAdd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/taskAdd */ "./src/components/taskAdd.js");




 // Create default Projects

var createDefaultProject = function createDefaultProject() {
  if (!localStorage.getItem("my_projects")) {
    var project = [{
      "projectName": "My Project",
      tasks: []
    }];
    localStorage.setItem("my_projects", JSON.stringify(project));
  }

  ;
};

var webPage = function webPage() {
  createDefaultProject();
  var mainBody = document.createElement("div");
  mainBody.classList.add("main");
  mainBody.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_1__["default"])());
  mainBody.append((0,_components_todoBody__WEBPACK_IMPORTED_MODULE_2__["default"])());
  return mainBody;
};

document.body.appendChild(webPage());
(0,_eventListeners__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_components_taskAdd__WEBPACK_IMPORTED_MODULE_4__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundlece9377e56f41c082ff1f.js.map