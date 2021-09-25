const overlayEl = document.getElementById('overlay');
const menuBarsEl = document.getElementById('menu-bars');
const navOneEl = document.getElementById('nav-one');
const navTwoEl = document.getElementById('nav-two');
const navThreeEl = document.getElementById('nav-three');
const navFourEl = document.getElementById('nav-four');
const navFiveEl = document.getElementById('nav-five');

const navArray = [navOneEl, navTwoEl, navThreeEl, navFourEl, navFiveEl];

// Nav Animation
function navAnimation(dir1, dir2) {
    navArray.forEach((nav, i) => {
        nav.classList.replace(`slide-${dir1}-${i + 1}`, `slide-${dir2}-${i + 1}`);
    });
}

// Toogle Navigation function 
function toggleNav() {
    menuBarsEl.classList.toggle('change');

    overlayEl.classList.toggle('overlay-active');
    if (overlayEl.classList.contains('overlay-active')) {
        overlayEl.classList.replace('overlay-slide-left', 'overlay-slide-right');
        navAnimation('out', 'in');
    } else {
        overlayEl.classList.replace('overlay-slide-right', 'overlay-slide-left');
        navAnimation('in', 'out');
    }
}

// Event listeners
menuBarsEl.addEventListener('click', toggleNav);

navArray.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});