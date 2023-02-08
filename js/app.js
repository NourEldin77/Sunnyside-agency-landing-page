const nav_btn = document.querySelector(".header__hamburger");
const nav = document.querySelector(".header__nav");

nav_btn.addEventListener("click", () => {
    nav_btn.classList.toggle("header__hamburger--active");
    nav.classList.toggle("header__nav--active")
});

const all_Links = document.querySelectorAll("a");

all_Links.forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
    })
})


const vw = Math.max(document.documentElement.clientWidth || window.innerWidth);
console.log(vw)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (vw > 1200) {
            entry.target.classList.toggle('--show', entry.isIntersecting);
        } else {
            entry.target.classList.add('--show', entry.isIntersecting);
        }
    })
});
document.querySelectorAll(".--hidden").forEach(ele => observer.observe(ele));






