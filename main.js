const button = document.querySelectorAll(".first-qa");
const paragraph = document.querySelectorAll(".paragraph");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", ()=> {
        paragraph[i].classList.toggle("show");
        button[i].querySelector(".btn").classList.toggle("icon-plus");
        button[i].querySelector(".btn").classList.toggle("icon-minus");
    });
}
