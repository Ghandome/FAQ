const button = document.querySelectorAll(".first-qa");
const paragraph = document.querySelectorAll(".paragraph");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", ()=> {
        const icon = button[i].querySelector("img");
        paragraph[i].classList.toggle("show");
        icon.classList.toggle("icon-plus");
        icon.classList.toggle("icon-minus");

        if (icon.classList.contains("icon-plus")) {
            icon.src = "./assets/images/icon-plus.svg";
        } else {
            icon.src = "./assets/images/icon-minus.svg";
        }
    });
}
