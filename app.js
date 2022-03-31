//* === === === Variables === === ===
const nBtn = document.getElementById('navBtn'); // Button.
const nBar = document.getElementById('nav-bar'); // Nav bar.
const links = document.querySelectorAll('.nav a'); // Take all links from nav.

//* === === === Functions === === ===
// Open & close nav.
const openNav = () => {
    if (nBar.style.left === '0vw') {
        nBar.style.left = '-100vw';
    } else {
        nBar.style.left = '0vw';
    }
};

// Close nav when click on link.
const closeNav = () => {
    if (nBar.style.left === '0vw') {
        nBar.style.left = '-100vw';
    }
}

//* === === === Events === === ===
nBtn.addEventListener('click', openNav);
links.forEach (function (link) {
    link.addEventListener('click', closeNav);
});