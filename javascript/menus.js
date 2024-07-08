//TIPS MENU
const tipsList = ["macOS", "VS Code", "GitHub Free Hosting"];
const innerMenuTopics = document.querySelector(".topics-menu");
//creates a li html tag with each items of the list
let listItems = "";
tipsList.forEach((tip) => {
  //creates an url with the items list to lowercase and replace blanc spaces
  const url = `/web/${tip.toLowerCase().replace(/ /g, "-")}.html`;
  listItems += `<li><a href="${url}">${tip}</a></li>`;
});
//wrap the previous list inside the <ul>
const htmlContent = `Tips <ul>${listItems}</ul>`;
//inserts to the html the list with all the items inside tipList
innerMenuTopics.innerHTML = htmlContent;

//TUTORIAL MENU
const tutorialList = ["Jenkins", "Docker", "Postman"];
const innerTutorial = document.querySelector(".tutorial-menu");
let tutorialItems = "";

tutorialList.forEach((tutorial) => {
  //creates an url with the items list to lowercase and replace blanc spaces
  const url = `/web/${tutorial.toLowerCase().replace(/ /g, "-")}.html`; // Genera una URL basada en el nombre del tutorial
  tutorialItems += `<li><a href="${url}">${tutorial}</a></li>`;
});

const htmlTutorialContent = `Tutorials <ul>${tutorialItems}</ul>`;
innerTutorial.innerHTML = htmlTutorialContent;
