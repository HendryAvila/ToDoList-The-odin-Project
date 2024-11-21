"use strict";

import { addProject, removeProjectById, clearProjects } from "./project.js";

const UIlistProjects = document.querySelector(".list-projects");

export function addProjectDOM(){
// Verificar si ya existe un input
let projectNameInput = document.querySelector(".project-name-input");

if (!projectNameInput) {
    // Crear un nuevo input si no existe
    projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("type", "text");
    projectNameInput.classList.add("project-name-input");
    projectNameInput.setAttribute("placeholder", "Enter project name");
    UIlistProjects.insertAdjacentElement("beforebegin", projectNameInput);

    // Escuchar el evento "Enter" en el input
    projectNameInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && projectNameInput.value.trim() !== "") {
            const projectName = document.createElement("li");
            projectName.textContent = projectNameInput.value.trim();
            console.log(addProject(projectName));
            
            UIlistProjects.appendChild(projectName);

            // Limpiar el input después de agregar el proyecto
            projectNameInput.remove()
        }
    });
} else {
    // Si ya existe el input, enfocar
    projectNameInput.focus();
}};

UIlistProjects.addEventListener("click", (event) => {
    // Verifica si el usuario hizo clic en un <li>
    if (event.target.tagName === "LI") {
      // Remueve la clase 'selected' de cualquier elemento previamente seleccionado
      const selected = UIlistProjects.querySelector(".selected");
      if (selected) {
        selected.classList.remove("selected");
      }
  
      // Agrega la clase 'selected' al elemento actual
      event.target.classList.add("selected");
    }
  });
  