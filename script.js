const box=document.createElement("div");
box.classList.add("box");

const heading=document.createElement("h1");
const headingText=document.createTextNode("we love bd");
heading.appendChild(headingText);
box.appendChild(heading);


const pera=document.createElement("p");
pera.style.color="blue"
const peraText=document.createTextNode("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates.");
pera.appendChild(peraText);



box.appendChild(pera);
document.getElementById("root").append(box);
