const expCards = document.getElementsByClassName("exp-card");
const expActs = document.getElementsByClassName("exp-act");

const bgimg = [
    "./images/TI.webp",
    "./images/operador.webp",
    "./images/investigador.webp"
];

console.log(bgimg);

for (let i = 0; i < expCards.length; i++) {
    expCards[i].addEventListener("mouseover", function () {
        const currentIndex = Array.from(expCards).indexOf(this);
        document.getElementById('experience').style.backgroundImage = `url(${bgimg[currentIndex]})`;
        for (var j = 0; j < expActs.length; j++) {
            if (j === currentIndex) {
                expActs[j].style.display = "block";
            } else {
                expActs[j].style.display = "none";
            }
        }
    });
}

window.onscroll = () => {
    const navBar = document.getElementById("nav");
    if (window.scrollY > 80) {
        navBar.style.height = '2rem';
        navBar.style.backgroundColor = '#22274F';

    } else {
        navBar.style.height = '';
        navBar.style.backgroundColor = '';




    }
};

const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-ico');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'block';

    closeIcon.addEventListener('click', () => {
        mobileMenu.style.display = 'none';

    })
})