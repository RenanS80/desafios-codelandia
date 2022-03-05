// Make Projects Cards
const mainCards = document.querySelector('.main-cards');
const cardFirst = document.querySelector('.card');

const projects = [
    {
        image: "assets/img/desafio1.jpg",
        title: "01 - Blog Codelândia",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg", "assets/img/svg/javascript.svg"],
        classe: ["html5-icon", "css3-icon", "javascript-icon"],
        website: "https://renans80.github.io/blog-codelandia/",
        repository: "https://github.com/RenanS80/blog-codelandia"

    },
    {
        image: "assets/img/desafio2.jpg",
        title: "02 - Jordan Shoes",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg"],
        classe: ["html5-icon", "css3-icon"],
        website: "https://renans80.github.io/jordanshoes/",
        repository: "https://github.com/RenanS80/jordanshoes"

    },
    {
        image: 'assets/img/desafio3.jpg',
        title: "03 - One Page",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg", "assets/img/svg/jQuery.svg"],
        classe: ["html5-icon", "css3-icon", "jquery-icon"],
        website: "https://renans80.github.io/one-page/",
        repository: "https://github.com/RenanS80/one-page"
    },
    {
        image: 'assets/img/desafio4.jpg',
        title: "04 - Login",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg"],
        classe: ["html5-icon", "css3-icon"],
        website: "https://renans80.github.io/login/",
        repository: "https://github.com/RenanS80/login"
    },
    {
        image: 'assets/img/desafio5.jpg',
        title: "05 - A Viagem de Chihiro",
        tecnology: ["assets/img/svg/react.svg", "assets/img/svg/typescript.svg", "assets/img/svg/css3.svg"],
        classe: ["react-icon", "typescript-icon", "css3-icon"],
        website: "https://renan-a-viagem-de-chihiro.netlify.app/",
        repository: "https://github.com/RenanS80/a-viagem-de-chihiro"
    },

    {
        image: 'assets/img/desafio6.jpg',
        title: "06 - Loki",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/sass.svg"],
        classe: ["html5-icon", "sass-icon"],
        website: "https://renans80.github.io/loki/",
        repository: "https://github.com/RenanS80/loki"
    }
];


projects.map(project => {
    const cardClone = cardFirst.cloneNode(true);
    cardClone.querySelector(".card-image img").src = project.image;
    cardClone.querySelector(".card-info-title h3").innerHTML = project.title;

    const tecno = cardClone.querySelector('.tecnology-icons')
    
    for(let i = 0; i < project.tecnology.length; i++){
        let newImage = document.createElement("img");
        tecno.appendChild(newImage);
        const tecnoImg = cardClone.querySelectorAll('.tecnology-icons img');
        tecnoImg[i].src = project.tecnology[i];
        tecnoImg[i].classList.add(project.classe[i]);
    }

    cardClone.querySelector(".card-buttons .demo-button").href = project.website;
    cardClone.querySelector(".card-buttons .repository-button").href = project.repository;

    mainCards.appendChild(cardClone);
})

cardFirst.remove();