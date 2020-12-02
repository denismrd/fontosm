document.querySelector(".nav-icon").addEventListener("click", togglenavbar);

document.querySelector(".back-drop").addEventListener("click", togglenavbar);

function togglenavbar() {
    document
        .querySelector(".nav-bar-container")
        .classList.toggle("bar-container-toggle");
    document.querySelector(".nav-bar").classList.toggle("bar-toggle");
    document.querySelector(".back-drop").classList.toggle("back-drop-toggle");
    document
        .querySelector(".nav-line:nth-child(1)")
        .classList.toggle("nav-line-1");
    document
        .querySelector(".nav-line:nth-child(2)")
        .classList.toggle("nav-line-2");
    document
        .querySelector(".nav-line:last-child")
        .classList.toggle("nav-line-3");
    document.querySelector(".nav-icon").classList.toggle("nav-icon-toggle");
}
