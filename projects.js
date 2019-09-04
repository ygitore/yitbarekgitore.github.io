var technologies = ['Html', 'Css','Javascript','Java','C#','Asp.Net','Python','Sql'];
let printToDom = (divId, stringToPrint)=>{
    document.getElementById(divId).innerHTML = stringToPrint;
}
var techBuilder = (arr)=>{
    let stringDom = '';
    for (let i = 0; i < arr.length; i++) {
        stringDom += `<div class="dom-items">
            <p>${arr[i]}</p>
        </div>`
    }
    printToDom('technologiesPage', stringDom);
}
let buttonEventTechnologies = (e)=>{
    if(e.target.id === 'navToTechnologies') {   
        techBuilder(technologies);
    }
}
const projects = [{
                title: "Cool Project", 
                screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
                description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
                githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            },{
                title: "Cool Project", 
                screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
                description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
                githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            },{
                title: "Cool Project", 
                screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
                description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
                githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            }
        ];

let printToDomProjects = (divId, stringToPrint)=>{
    document.getElementById(divId).innerHTML = stringToPrint;
}
var projBuilder = (arr)=>{
    let stringDom = '';
    for (let i = 0; i < arr.length; i++) {
        stringDom += `<div class="project-items">
            <p>${arr[i].title}</p>
            <p>${arr[i].description}</p>
            <p>${arr[i].screenshot}</p>
            <p>${arr[i].title}</p>
            <p>${arr[i].githubUrl}</p>
        </div>`
    }
    printToDomProjects('projectsPage', stringDom);
}
let buttonEventProject = (e)=>{ 
    if(e.target.id === 'navToProjects') {      
        projBuilder(projects);
    }
}
document.getElementById('navToProjects').addEventListener('click', buttonEventProject);
document.getElementById('navToTechnologies').addEventListener('click', buttonEventTechnologies);