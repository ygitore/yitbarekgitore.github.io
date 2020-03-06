const listOfProjects = [
                        {
                            title: "Temperature Converter", 
                            screenshot: "../images/temperatureConverter.PNG", 
                            description: "This is the program that converts a temperature in fahrenheit to celsius, or from celsius to fahrenheit.", // A good project description includes 'the what', 'the why', and 'the how'.
                            technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                            available: true,
                            url: "https://github.com/yitbarekgitore/temperatureConvertor",
                            githubUrl: "https://github.com/yitbarekgitore/temperatureConvertor"
                        },
                        {
                            title: "Pet-adoption", 
                            screenshot: "../images/petAdoption.PNG", 
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
                            screenshot: "../images/Hoggy.PNG", 
                            description: "This project is using bootstrap jumbotron to have your sorting hat introduce itself and start the sorting process (by clicking on a button). A bootstrap form will then appear to fill in the student's name and a button to sort. This then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). On sorting a student, the form should clear and a bootstrap card with the student's name and house should print below the form. You should also be able to expel a student after they have been sorted, which should remove their card from the student record.", // A good project description includes 'the what', 'the why', and 'the how'.
                            technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                            available: true,
                            url: "https://github.com/yitbarekgitore/sorting-hat", 
                            githubUrl: "https://github.com/yitbarekgitore/sorting-hat"
                        },
                        {
                            title: "Product-cards", 
                            screenshot: "../images/productCards.PNG", 
                            description: "This is the best project", 
                            technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
                            available: true,
                            url: "https://github.com/yitbarekgitore/product-Card", 
                            githubUrl: "https://github.com/yitbarekgitore/product-Card"
                        }
];

export const listOfProjectsData = () => {
    return listOfProjects.slice()
}