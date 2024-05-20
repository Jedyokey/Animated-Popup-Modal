const section = document.querySelector("section");
const hireBtn = document.querySelector("#hireBtn");
const closeBtn = document.querySelectorAll("#close");

hireBtn.addEventListener("click", () => {
    section.classList.add("show");
});

closeBtn.forEach((cBtn) => {
    cBtn.addEventListener("click", () => {
        section.classList.remove("show"); 
    });
});