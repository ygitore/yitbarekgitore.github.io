var technologies = ['Html5', 'Css3','Javascript','Java','C#','Asp.Net','Python','Sql'];
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
                title: "Temperature Converter", 
                screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
                description: "This is the program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
                githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            },
            {
                title: "Pet-adoption", 
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
                available: false,
                url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
                githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            },
            {
                title: "Sorting-hat", 
                screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
                description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
                githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
            },
            {
                title: "Product-cards", 
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
        if(arr[i].available === true)
        {
            stringDom += `<div class="project-items">
                <h4>${arr[i].title}</h4>
                <p>${arr[i].screenshot}</p>
                <p class="descritption">Description</p>
                <p>${arr[i].description}</p>
                <p>${arr[i].technologiesUsed}</p>
                <p>${arr[i].available}</p>
                <p>${arr[i].url}</p>
                <p>${arr[i].githubUrl}</p>
            </div>`;
        }
    }
    printToDom('projectsPage', stringDom);
}
let buttonEventProject = (e)=>{ 
    if(e.target.id === 'navToProjects') {      
        projBuilder(projects);
    }
}
let buttonClickEventForBio = ()=>{
    const myBio = `<div class="my-bio">
                        <p>My name is Yitbarek Gitore. I am recent computer sciece graduate from Tennessee state university with concentration in cyber security.
                        My career in cyber security started when i was freshman in college. Most of my career in the past have been in cyber security area. My love for coding hasn\'t been new.</p>
                   </div>`;
    printToDom('bioPage', myBio);

}
document.getElementById('navToBio').addEventListener('click', buttonClickEventForBio);
document.getElementById('navToProjects').addEventListener('click', buttonEventProject);
document.getElementById('navToTechnologies').addEventListener('click', buttonEventTechnologies);