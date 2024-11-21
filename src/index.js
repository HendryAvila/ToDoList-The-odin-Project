"use strict";
import "./style.css"
import {addProjectDOM} from "./dom.js"

import { CreateTodo } from "./todo.js";
import {updateTimer, resetTimer, startTimer, pauseTimer, startBreak} from "./pomodoro.js"


const addProjectBtn = document.querySelector(".add-project");
const UIlistProjects = document.querySelector(".list-projects");


const todo1 = new CreateTodo("Pushups", "Do 4x20 pushups", "2024-11-20", "medium");
const todo2 = new CreateTodo("Squats", "Complete 4x15 squats", "2024-11-21", "high");

//Pomodoro
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const pauseButton = document.getElementById("pause");
const breakButton = document.getElementById("break");

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
pauseButton.addEventListener("click",pauseTimer);
breakButton.addEventListener("click", startBreak);
updateTimer();




addProjectBtn.addEventListener("click", addProjectDOM);




