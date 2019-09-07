var technologies = ['Html', 'Css','Javascript','Java','C#','Asp.Net','Python','Sql'];
let printToDom = (divId, stringToPrint)=>{
    switch(divId){
        case 'bioPage':
            document.getElementById('technologiesPage').innerHTML = '';
            document.getElementById('projectsPage').innerHTML = '';
        case 'technologiesPage':
            document.getElementById('bioPage').innerHTML = '';
            document.getElementById('projectsPage').innerHTML = '';
        case 'projectsPage':
            document.getElementById('bioPage').innerHTML = '';
            document.getElementById('technologiesPage').innerHTML = ''; 
    }
    document.getElementById(divId).innerHTML = stringToPrint;
}
var techBuilder = (myArr)=>{
    let stringDom = '';
    for (let i = 0; i < myArr.length; i++) {
        stringDom += `<div class="dom-items">
            <p>${myArr[i]}</p>
        </div>`;
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
            },
            {
                title: "pet-adoption Project", 
                screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
                description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
                githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            },
            {
                title: "pie-Epodium Project", 
                screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
                description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
                githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            }
        ];

// let printToDomProjects = (divId, stringToPrint)=>{
//     document.getElementById(divId).innerHTML = stringToPrint;
// }
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
    printToDom('projectsPage', stringDom);
}
let buttonEventProject = (e)=>{ 
    if(e.target.id === 'navToProjects') {      
        projBuilder(projects);
    }
}
let buttonClickEventForBio = ()=>{
    const myBio = `<p>THis is my bio</p>`;
    printToDom('bioPage', myBio);

}
document.getElementById('navToBio').addEventListener('click', buttonClickEventForBio);

document.getElementById('navToProjects').addEventListener('click', buttonEventProject);
document.getElementById('navToTechnologies').addEventListener('click', buttonEventTechnologies);