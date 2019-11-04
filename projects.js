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
        stringDom += `<div class="list-of-technologies">
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
                screenshot: "./images/temperatureConverter.png", 
                description: "This is the program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/yitbarekgitore/temperatureConvertor",
                githubUrl: "https://github.com/yitbarekgitore/temperatureConvertor"
            },
            {
                title: "Pet-adoption", 
                screenshot: "./images/petAdoption.png", 
                description: "This project is used to filter out the animals from the list of animals based up on user choice.", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/yitbarekgitore/pet-adoption",
                githubUrl: "https://github.com/yitbarekgitore/pet-adoption"
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
                screenshot: "./images/Hoggy.png", 
                description: "This project is using bootstrap jumbotron to have your sorting hat introduce itself and start the sorting process (by clicking on a button). A bootstrap form will then appear to fill in the student's name and a button to sort. This then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). On sorting a student, the form should clear and a bootstrap card with the student's name and house should print below the form. You should also be able to expel a student after they have been sorted, which should remove their card from the student record.", // A good project description includes 'the what', 'the why', and 'the how'.
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/yitbarekgitore/sorting-hat", 
                githubUrl: "https://github.com/yitbarekgitore/sorting-hat"
            },
            {
                title: "Product-cards", 
                screenshot: "./images/productCards.png", 
                description: "This is the best project", 
                technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                available: true,
                url: "https://github.com/yitbarekgitore/product-Card", 
                githubUrl: "https://github.com/yitbarekgitore/product-Card"
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
                <h3 class="project-title">${arr[i].title}</h3>
                <p><img src = '${arr[i].screenshot}'</p>
                <p class="descritption">Description</p>
                <p>${arr[i].description}</p>
                <p class="technologies-used-in-this-proj">Technologies used</p>
                <p>${arr[i].technologiesUsed}</p>
                <p class="available">${arr[i].available}</p>
                <i class="view-project"><a href = '${arr[i].url}'>View Project</a></i>
                <em class="project-link"><a href = '${arr[i].githubUrl}'>Project Link</a></em>
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
                        <p>My name is Yitbarek Gitore. I am recent computer sciece graduate from Tennessee state university with concentration in cyber security.<br>I always knew I was going to be web developer. But i have never worked as web developer for any company. Most of my jobs in the past including internships experience were in cyber security.
                        My love for coding hasn\'t been new. I love handling everthing from front-end develpment(making site prettier) to back-end development to server management. I enjoy learning new things and keep up with changing technologies and overcoming the challenges we have in our day today life through technology.  </p>
                   </div>`;
    printToDom('bioPage', myBio);
}
document.getElementById('homePageImg').addEventListener('click', buttonClickEventForBio);
document.getElementById('navToBio').addEventListener('click', buttonClickEventForBio);
document.getElementById('navToProjects').addEventListener('click', buttonEventProject);
document.getElementById('navToTechnologies').addEventListener('click', buttonEventTechnologies);