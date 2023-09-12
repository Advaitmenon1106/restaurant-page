import mainImg from  './images/food.jpg';
import {loadAboutUs} from "./aboutus.js";
// import {loadcuisine} from "./cuisine.js";
// import {loadContactInfo} from "./contact.js"

export function pageLoad() {
    const content = document.getElementById('content');
    const imgDiv = document.createElement('div');
    imgDiv.style.cssText = 
    
    `
    width: 100vw;
    height: 45vh;
    object-fit:cover;
    background-color: black;
    `

    const imgElement = document.createElement('img');
    imgElement.src = mainImg;

    content.appendChild(imgDiv);
    imgDiv.appendChild(imgElement);

    imgElement.style.cssText = 
    
    `
    width: 100vw;
    height: 45vh;
    object-fit:cover;
    opacity: 0.5;
    background-color: black;
    `

    let optionsDiv = document.createElement('div');
    optionsDiv.style.cssText =

    `
    display: flex;
    justify-content: space-around;
    position: relative;
    bottom: 150px;
    left: 10%;
    margin-right: 23%;
    `
    content.appendChild(optionsDiv);

    let optionArr = ['About Us', 'Cuisine', 'Contact Us'];
    for (let i=0; i<3; i++){
        let option = document.createElement('div');
        option.className = 'options';
        optionsDiv.appendChild(option);
        option.innerHTML = optionArr[i];
    }
    let optionButtons = document.getElementsByClassName('options');
    const aboutUs = optionButtons[0];
    const cuisine = optionButtons[1];
    const contact = optionButtons[2];

    aboutUs.addEventListener('click', function(){
        content.appendChild(loadAboutUs())
    });
    // cuisine.addEventListener('click', loadcuisine);
    // contact.addEventListener('click', loadContactInfo);
}