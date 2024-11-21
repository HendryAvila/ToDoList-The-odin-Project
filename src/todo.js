"use strict";

let todoIdCounter = 0;

export class CreateTodo {
    constructor(name, description, dueDate, priority) {
        if (!name || !description || !dueDate || !priority) {
            throw new Error("All fields are required to create a Todo");
        }

        this.id = ++todoIdCounter;
        this.name = name;
        this.description = description;
        this.dueDate = dueDate; 
        this.priority = priority; 
    }

    toString() {
        return `Todo [ID: ${this.id}] ${this.name} - ${this.description} (Due: ${this.dueDate}, Priority: ${this.priority})`;
    }
}
