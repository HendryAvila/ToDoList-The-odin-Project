"use strict";
import { CreateTodo } from "./todo.js";

let projectList = [];
let projectIdCounter = 0;

class CreateProject {
    constructor(name) {
        if (!name) {
            throw new Error("Project name is required");
        }

        this.id = ++projectIdCounter;
        this.projectName = name;
        this.todoList = [];
    }

    addTodo(todo) {
        if (!(todo instanceof CreateTodo)) {
            throw new Error("Only instances of CreateTodo can be added");
        }
        this.todoList.push(todo);
        return todo;
    }

    removeTodo(id) {
        const index = this.todoList.findIndex((todo) => todo.id === id);
        if (index !== -1) {
            this.todoList.splice(index, 1);
            return true;
        }
        console.error(`Todo with ID ${id} not found in project ${this.projectName}`);
        return false;
    }

    clearTodos() {
        this.todoList = [];
    }

    toString() {
        return `Project [ID: ${this.id}] ${this.projectName} (Todos: ${this.todoList.length})`;
    }
}

function addProject(name) {
    const project = new CreateProject(name);
    projectList.push(project);
    return project;
}

function removeProjectById(id) {
    const index = projectList.findIndex((project) => project.id === id);
    if (index !== -1) {
        projectList.splice(index, 1);
        return true;
    }
    console.error(`Project with ID ${id} not found`);
    return false;
}

function clearProjects() {
    projectList = [];
}

// Exportar funciones útiles
export { CreateProject, addProject, removeProjectById, clearProjects };
