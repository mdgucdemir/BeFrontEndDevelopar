var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
System.register("components/base-component", [], function (exports_1, context_1) {
    "use strict";
    var Component;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            // Component Base Class
            Component = class Component {
                constructor(templateId, hostElementId, insertAtStart, newElementId) {
                    this.templateElement = document.getElementById(templateId);
                    this.hostElement = document.getElementById(hostElementId);
                    const importedNode = document.importNode(this.templateElement.content, true);
                    this.element = importedNode.firstElementChild;
                    if (newElementId) {
                        this.element.id = newElementId;
                    }
                    this.attach(insertAtStart);
                }
                attach(insertAtBeginning) {
                    this.hostElement.insertAdjacentElement(insertAtBeginning ? "afterbegin" : "beforeend", this.element);
                }
            };
            exports_1("Component", Component);
        }
    };
});
System.register("util/validation", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0;
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === "string") {
            isValid =
                isValid && validatableInput.value.length >= validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === "string") {
            isValid =
                isValid && validatableInput.value.length <= validatableInput.maxLength;
        }
        if (validatableInput.min != null &&
            typeof validatableInput.value === "number") {
            isValid = isValid && validatableInput.value >= validatableInput.min;
        }
        if (validatableInput.max != null &&
            typeof validatableInput.value === "number") {
            isValid = isValid && validatableInput.value <= validatableInput.max;
        }
        return isValid;
    }
    exports_2("validate", validate);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("decorators/autobind", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    // autobind decorator
    function autobind(_, _2, descriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            },
        };
        return adjDescriptor;
    }
    exports_3("autobind", autobind);
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("models/project", [], function (exports_4, context_4) {
    "use strict";
    var ProjectStatus, Project;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [],
        execute: function () {
            // Project Type
            (function (ProjectStatus) {
                ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
                ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
            })(ProjectStatus || (exports_4("ProjectStatus", ProjectStatus = {})));
            Project = class Project {
                constructor(id, title, description, people, status) {
                    this.id = id;
                    this.title = title;
                    this.description = description;
                    this.people = people;
                    this.status = status;
                }
            };
            exports_4("Project", Project);
        }
    };
});
System.register("state/project-state", ["models/project"], function (exports_5, context_5) {
    "use strict";
    var project_js_1, State, ProjectState, projectState;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (project_js_1_1) {
                project_js_1 = project_js_1_1;
            }
        ],
        execute: function () {
            State = class State {
                constructor() {
                    this.listeners = [];
                }
                addListener(listenerFn) {
                    this.listeners.push(listenerFn);
                }
            };
            // Project State
            ProjectState = class ProjectState extends State {
                constructor() {
                    super();
                    this.projects = [];
                }
                static getInstance() {
                    if (this.instance) {
                        return this.instance;
                    }
                    this.instance = new ProjectState();
                    return this.instance;
                }
                addProject(title, description, numOfPeople) {
                    const newProject = new project_js_1.Project(Math.random().toString(), title, description, numOfPeople, project_js_1.ProjectStatus.Active);
                    this.projects.push(newProject);
                    this.updateListeners();
                }
                moveProject(projectId, newStatus) {
                    const project = this.projects.find((prj) => prj.id === projectId);
                    if (project && project.status !== newStatus) {
                        project.status = newStatus;
                        this.updateListeners();
                    }
                }
                updateListeners() {
                    for (const listenerFn of this.listeners) {
                        listenerFn(this.projects.slice());
                    }
                }
            };
            exports_5("ProjectState", ProjectState);
            exports_5("projectState", projectState = ProjectState.getInstance());
        }
    };
});
System.register("components/project-input", ["components/base-component", "util/validation", "decorators/autobind", "state/project-state"], function (exports_6, context_6) {
    "use strict";
    var base_component_js_1, validation_js_1, autobind_js_1, project_state_js_1, ProjectInput;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (base_component_js_1_1) {
                base_component_js_1 = base_component_js_1_1;
            },
            function (validation_js_1_1) {
                validation_js_1 = validation_js_1_1;
            },
            function (autobind_js_1_1) {
                autobind_js_1 = autobind_js_1_1;
            },
            function (project_state_js_1_1) {
                project_state_js_1 = project_state_js_1_1;
            }
        ],
        execute: function () {
            // ProjetInput Class
            ProjectInput = class ProjectInput extends base_component_js_1.Component {
                constructor() {
                    super("project-input", "app", true, "user-input");
                    this.titleInputElement = this.element.querySelector("#title");
                    this.descriptionInputElement = this.element.querySelector("#description");
                    this.peopleInputElement = this.element.querySelector("#people");
                    this.configure();
                }
                configure() {
                    this.element.addEventListener("submit", this.submitHandler);
                }
                renderContent() { }
                getheruserInput() {
                    const enteredTitle = this.titleInputElement.value;
                    const enteredDescription = this.descriptionInputElement.value;
                    const enteredPeople = this.peopleInputElement.value;
                    const titleValidatable = {
                        value: enteredTitle,
                        required: true,
                    };
                    const descriptionValidatable = {
                        value: enteredDescription,
                        required: true,
                        minLength: 5,
                    };
                    const peopleValidatable = {
                        value: +enteredPeople,
                        required: true,
                        min: 1,
                        max: 5,
                    };
                    if (!validation_js_1.validate(titleValidatable) ||
                        !validation_js_1.validate(descriptionValidatable) ||
                        !validation_js_1.validate(peopleValidatable)) {
                        alert("Invalid input, please try again!");
                        return;
                    }
                    else {
                        return [enteredTitle, enteredDescription, +enteredPeople];
                    }
                }
                clearInputs() {
                    this.titleInputElement.value = "";
                    this.descriptionInputElement.value = "";
                    this.peopleInputElement.value = "";
                }
                submitHandler(event) {
                    event.preventDefault();
                    const userInput = this.getheruserInput();
                    if (Array.isArray(userInput)) {
                        const [title, desc, people] = userInput;
                        project_state_js_1.projectState.addProject(title, desc, people);
                        this.clearInputs();
                    }
                }
            };
            exports_6("ProjectInput", ProjectInput);
            __decorate([
                autobind_js_1.autobind
            ], ProjectInput.prototype, "submitHandler", null);
        }
    };
});
// Drag & Drop Interfaces
System.register("models/drag-drop", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("components/project-item", ["components/base-component", "decorators/autobind"], function (exports_8, context_8) {
    "use strict";
    var base_component_js_2, autobind_js_2, ProjectItem;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (base_component_js_2_1) {
                base_component_js_2 = base_component_js_2_1;
            },
            function (autobind_js_2_1) {
                autobind_js_2 = autobind_js_2_1;
            }
        ],
        execute: function () {
            // ProjectItem Class
            ProjectItem = class ProjectItem extends base_component_js_2.Component {
                get persons() {
                    if (this.project.people === 1) {
                        return "1 person";
                    }
                    else {
                        return `${this.project.people} persons`;
                    }
                }
                constructor(hostId, project) {
                    super("single-project", hostId, false, project.id);
                    this.project = project;
                    this.configure();
                    this.renderContent();
                }
                dragStartHandler(event) {
                    event.dataTransfer.setData("text/plain", this.project.id);
                    event.dataTransfer.effectAllowed = "move";
                }
                dragEndHandler(_) {
                    console.log("dragEnd");
                }
                configure() {
                    this.element.addEventListener("dragstart", this.dragStartHandler);
                    this.element.addEventListener("dragend", this.dragEndHandler);
                }
                renderContent() {
                    this.element.querySelector("h2").textContent = this.project.title;
                    this.element.querySelector("h3").textContent = this.persons + " assigned";
                    this.element.querySelector("p").textContent = this.project.description;
                }
            };
            exports_8("ProjectItem", ProjectItem);
            __decorate([
                autobind_js_2.autobind
            ], ProjectItem.prototype, "dragStartHandler", null);
        }
    };
});
System.register("components/project-list", ["components/base-component", "decorators/autobind", "state/project-state", "models/project", "components/project-item"], function (exports_9, context_9) {
    "use strict";
    var base_component_js_3, autobind_js_3, project_state_js_2, project_js_2, project_item_js_1, ProjectList;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (base_component_js_3_1) {
                base_component_js_3 = base_component_js_3_1;
            },
            function (autobind_js_3_1) {
                autobind_js_3 = autobind_js_3_1;
            },
            function (project_state_js_2_1) {
                project_state_js_2 = project_state_js_2_1;
            },
            function (project_js_2_1) {
                project_js_2 = project_js_2_1;
            },
            function (project_item_js_1_1) {
                project_item_js_1 = project_item_js_1_1;
            }
        ],
        execute: function () {
            // ProjectList Class
            ProjectList = class ProjectList extends base_component_js_3.Component {
                constructor(type) {
                    super("project-list", "app", false, `${type}-projects`);
                    this.type = type;
                    this.assignedProjects = [];
                    this.renderContent();
                    this.configure();
                }
                dragOverHandler(event) {
                    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
                        event.preventDefault();
                        const listEl = this.element.querySelector("ul");
                        listEl.classList.add("droppable");
                    }
                }
                dropHandler(event) {
                    const prjId = event.dataTransfer.getData("text/plain");
                    project_state_js_2.projectState.moveProject(prjId, this.type === "active" ? project_js_2.ProjectStatus.Active : project_js_2.ProjectStatus.Finished);
                }
                dragLeaveHandler(_) {
                    const listEl = this.element.querySelector("ul");
                    listEl.classList.remove("droppable");
                }
                configure() {
                    this.element.addEventListener("dragover", this.dragOverHandler);
                    this.element.addEventListener("dragleave", this.dragLeaveHandler);
                    this.element.addEventListener("drop", this.dropHandler);
                    project_state_js_2.projectState.addListener((projects) => {
                        const relevantProjects = projects.filter((prj) => {
                            if (this.type === "active") {
                                return prj.status === project_js_2.ProjectStatus.Active;
                            }
                            return prj.status === project_js_2.ProjectStatus.Finished;
                        });
                        this.assignedProjects = relevantProjects;
                        this.renderProjects();
                    });
                }
                renderContent() {
                    const listId = `${this.type}-projects-list`;
                    this.element.querySelector("ul").id = listId;
                    this.element.querySelector("h2").textContent =
                        this.type.toUpperCase() + " PROJECTS";
                }
                renderProjects() {
                    const listEl = document.getElementById(`${this.type}-projects-list`);
                    listEl.innerHTML = ""; // duplicating i onlemek icin
                    for (const prjItem of this.assignedProjects) {
                        new project_item_js_1.ProjectItem(this.element.querySelector("ul").id, prjItem);
                    }
                }
            };
            exports_9("ProjectList", ProjectList);
            __decorate([
                autobind_js_3.autobind
            ], ProjectList.prototype, "dragOverHandler", null);
            __decorate([
                autobind_js_3.autobind
            ], ProjectList.prototype, "dropHandler", null);
            __decorate([
                autobind_js_3.autobind
            ], ProjectList.prototype, "dragLeaveHandler", null);
        }
    };
});
System.register("app", ["components/project-input", "components/project-list"], function (exports_10, context_10) {
    "use strict";
    var project_input_js_1, project_list_js_1;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (project_input_js_1_1) {
                project_input_js_1 = project_input_js_1_1;
            },
            function (project_list_js_1_1) {
                project_list_js_1 = project_list_js_1_1;
            }
        ],
        execute: function () {
            // Render olmasi icin bunlari burada bu sekilde atama yapmalisin yoksa render olmuyorlar
            new project_input_js_1.ProjectInput();
            new project_list_js_1.ProjectList("active");
            new project_list_js_1.ProjectList("finished");
        }
    };
});
//# sourceMappingURL=bundle.js.map