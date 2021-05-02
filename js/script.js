{
    const hideImage = document.querySelector(".js-hideImage");
    const changeBackground = document.querySelector(".js-changeBackground");

    const welcome = () => {
        console.log("Prototype of my resume")
    }

    const onChangeBackgroundClick = () => {
        const bodyBackground = document.querySelector(".js-body");
        bodyBackground.classList.toggle("body--bright");
        if (changeBackground.innerText === "Bright mode") {
            changeBackground.innerText = "Dark mode";
        }
        else {
            changeBackground.innerText = "Bright mode";
        }
    };

    const hideImageFunction = () => {
        const myPhoto = document.querySelector(".navigation__image");
        myPhoto.classList.toggle("js-navigation__image");
        if (hideImage.innerText === "Hide image") {
            hideImage.innerText = "Show image";
        }
        else {
            hideImage.innerText = "Hide image";
        }
    };

   const init = () => {
    changeBackground.addEventListener("click", onChangeBackgroundClick);
    hideImage.addEventListener("click", hideImageFunction);
    welcome();
};
    
    init();
}
