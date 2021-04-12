
console.log("Prototype of my resume")

const bodyBackground = document.querySelector(".js-body");
const changeBackground = document.querySelector(".js-changeBackground");

changeBackground.addEventListener("click", () => {
    bodyBackground.classList.toggle("body--bright");

    if (changeBackground.innerText === "Bright mode") 
    {
        changeBackground.innerText = "Dark mode";
    } 
    else  
    {
        changeBackground.innerText = "Bright mode";
    }
});

const myPhoto = document.querySelector(".navigation__image");
const hideImage = document.querySelector(".js-hideImage");

hideImage.addEventListener("click", () => {
    myPhoto.classList.toggle("js-navigation__image");

    if (hideImage.innerText === "Hide image") 
    {
        hideImage.innerText = "Show image";
    } 
    else  
    {
        hideImage.innerText = "Hide image";
    }
});
