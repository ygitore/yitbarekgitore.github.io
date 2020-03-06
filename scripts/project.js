/* This module's responsiblity is to represent a single project HTML */

const project = (projectObject) => {
    return `
        <div>
            <h4>${projectObject.title}</h4>
            <img src = "${projectObject.screenshot}">
            <p>${projectObject.description}</p>
            <p>${projectObject.technologiesUsed}</p>
            <a href = "${projectObject.url}">Url</a>
            <a href = "${projectObject.githubUrl}">Github</a>
        </div>
    `
}
export default project