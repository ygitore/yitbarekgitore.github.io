/* This module is responsble for creating the html representation for a list of projects */

import { listOfProjectsData } from "./ProjectDataProvider.js";
import Project from './project.js'

/* Query for the document for an element that has a class of container and storing that element in a varianle called contentTarget */
const contentTarget = document.querySelector('.projects')
const listOfProjects = () => {
    /* Invoking the function that returns a copy of the list of projects data, 
    and storing it in a variable called projects */
    const projects = listOfProjectsData()
    for (const projectObject of projects) {
        const htmlRepresentation = Project(projectObject)
        // putting each project on to contentTarget
        contentTarget.innerHTML += htmlRepresentation
    }
}
export default listOfProjects