
console.log("Prototype of my resume")

const bodyBackground = document.querySelector(".js-body");
const changeBackground = document.querySelector(".js-changeBackground");

changeBackground.addEventListener("click", () => {
    bodyBackground.classList.toggle("body--dark");

    if (changeBackground.innerText === "Dark mode") 
    {
        changeBackground.innerText = "Light mode";
    } 
    else  
    {
        changeBackground.innerText = "Dark mode";
    }
});

const myPhoto = document.querySelector(".myPhoto");
const hideImage = document.querySelector(".js-hideImage");

hideImage.addEventListener("click", () => {
    myPhoto.classList.toggle("js-myPhoto");

    if (hideImage.innerText === "Hide image") 
    {
        hideImage.innerText = "Show image";
    } 
    else  
    {
        hideImage.innerText = "Hide image";
    }
});
