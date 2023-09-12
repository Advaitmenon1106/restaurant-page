export function loadAboutUs(){

    let aboutUsDiv = document.createElement('div');

    aboutUsDiv.style.cssText =
    `
    font-family: 'Comic Neue', 'Times New Roman', Times, serif;
    font-size: 35px;
    border: 5px double goldenrod;
    width: 1000px;
    padding: 2%;
    margin-left: 20%;
    margin-bottom: 2%;
    border-radius: 10px

    `

    let aboutUs = 
    `We welcome you to [restaurant-name]. </br>

    [restaurant-name] has aspired to serve its customers the finest Asian cuisines. 
    Established in the year 2005, we have, from our very inception, tried to evolve and encapsulate the nuances of every type of Asian food and culture.
    We pride ourselves on being capable of catering to nearly 5 different regions-worth of cuisines. Be it authentic Chinese, Thai, Malay, Japanese, Korean dishes, or any of the major dominating dishes of Asia- we are more than pleased to serve you, our esteemed customers, any and all dishes that will tickle your senses and take your taste-buds on an adventure. 
    `;
    aboutUsDiv.innerHTML = aboutUs;
    return aboutUsDiv;
}