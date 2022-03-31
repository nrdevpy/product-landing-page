// === === === Variables === === ===
const nBtn = document.getElementById('navBtn');
const nBar = document.getElementById('nav-bar');

// === === === Functions === === ===
const openNav = () => {
    if (nBar.style.left === '0vw') {
        nBar.style.left = '-100vw';
    } else {
        nBar.style.left = '0vw';
    }
};

// === === === Events === === ===
nBtn.addEventListener('click', openNav);