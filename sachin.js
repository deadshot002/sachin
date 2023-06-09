document.querySelector('.hamb').classList.toggle('not');
document.querySelector('.hambm').classList.toggle('not');
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.label').classList.toggle('labelGo');
    document.querySelector('.hambm').classList.toggle('not');
    document.querySelector('.hamb').classList.toggle('not');
    document.querySelector('.main').classList.toggle('mainall');
    document.querySelector('.hamburger').classList.toggle('hamburgerOut');
    document.querySelector('.close').classList.toggle('not');
    document.querySelector('.closem').classList.toggle('not');
})