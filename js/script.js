
console.log("Prototype of my resume")

const bodyBackground = document.querySelector(".js-body");
const changeBackground = document.querySelector(".js-changeBackground");

changeBackground.addEventListener("click", () => {
    bodyBackground.classList.toggle("body--dark");
    changeBackground.innerHTML = "Light mode / Dark mode";
});