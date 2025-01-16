
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random Image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const sectionHeading = document.createElement("h2");
sectionHeading.innerText = "DOM Basics";
const sectionParagraph = document.createElement("p");
sectionParagraph.innerText = "This was added through Javascript";
newSection.appendChild(sectionHeading);
newSection.appendChild(sectionParagraph);
document.body.appendChild(newSection);
