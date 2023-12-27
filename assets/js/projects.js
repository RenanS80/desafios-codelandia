// Make Projects Cards
const MAIN_CARDS = document.querySelector('.main-cards');
const CARD_FIRST = document.querySelector('.card');

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
        title: "03 - TechBlog",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg"],
        classe: ["html5-icon", "css3-icon"],
        website: "https://renans80.github.io/tech-blog/",
        repository: "https://github.com/RenanS80/tech-blog"
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
    },
    {
        image: 'assets/img/desafio7.jpg',
        title: "07 - Valorant",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg"],
        classe: ["html5-icon", "css3-icon"],
        website: "https://renans80.github.io/valorant/",
        repository: "https://github.com/RenanS80/valorant"
    },
    {
        image: 'assets/img/desafio8.jpg',
        title: "08 - CodeMoji",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/sass.svg", "assets/img/svg/javascript.svg"],
        classe: ["html5-icon", "sass-icon", "javascript-icon"],
        website: "https://renans80.github.io/codemoji/",
        repository: "https://github.com/RenanS80/codemoji"
    },
    {
        image: 'assets/img/desafio9.jpg',
        title: "09 - Naped",
        tecnology: ["assets/img/svg/react.svg", "assets/img/svg/sass.svg", "assets/img/svg/axios.svg"],
        classe: ["react-icon", "sass-icon", "axios-icon"],
        website: "https://www.youtube.com/watch?v=Iwn8Fq7AYJw",
        repository: "https://github.com/RenanS80/naped"
    },
    {
        image: 'assets/img/desafio10.jpg',
        title: "10 - Jogo da Memória",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg", "assets/img/svg/javascript.svg"],
        classe: ["html5-icon", "css3-icon", "javascript-icon"],
        website: "https://renans80.github.io/jogo-da-memoria-halloween/",
        repository: "https://github.com/RenanS80/jogo-da-memoria-halloween"
    },
    {
        image: 'assets/img/desafio11.png',
        title: "11 - La Pizza",
        tecnology: ["assets/img/svg/react.svg", "assets/img/svg/typescript.svg", "assets/img/svg/css3.svg"],
        classe: ["react-icon", "typescript-icon", "css3-icon"],
        website: "https://renan-la-pizza.netlify.app/",
        repository: "https://github.com/RenanS80/la-pizza"
    },
    {
        image: 'assets/img/desafio12.jpg',
        title: "12 - Arcane",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg"],
        classe: ["html5-icon", "css3-icon"],
        website: "https://renans80.github.io/arcane/",
        repository: "https://github.com/RenanS80/arcane"
    },
    {
        image: 'assets/img/desafio13.jpg',
        title: "13 - Natal",
        tecnology: ["assets/img/svg/react.svg", "assets/img/svg/typescript.svg", "assets/img/svg/css3.svg"],
        classe: ["react-icon", "typescript-icon", "css3-icon"],
        website: "https://renan-natal-codelandia.netlify.app/",
        repository: "https://github.com/RenanS80/natal"
    },
    {
        image: 'assets/img/desafio14.jpg',
        title: "14 - Rachi",
        tecnology: ["assets/img/svg/html5.svg", "assets/img/svg/css3.svg", "assets/img/svg/javascript.svg"],
        classe: ["html5-icon", "css3-icon", "javascript-icon"],
        website: "https://renans80.github.io/Rachi/",
        repository: "https://github.com/RenanS80/Rachi"
    }
];


projects.map(project => {
    const CARD_CLONE = CARD_FIRST.cloneNode(true);
    CARD_CLONE.querySelector(".card-image img").src = project.image;
    CARD_CLONE.querySelector(".card-info-title h3").innerHTML = project.title;

    const TECNO = CARD_CLONE.querySelector('.tecnology-icons')
    
    for(let i = 0; i < project.tecnology.length; i++){
        let newImage = document.createElement("img");
        TECNO.appendChild(newImage);
        const TECNO_IMG = CARD_CLONE.querySelectorAll('.tecnology-icons img');
        TECNO_IMG[i].src = project.tecnology[i];
        TECNO_IMG[i].classList.add(project.classe[i]);
    }

    CARD_CLONE.querySelector(".card-buttons .demo-button").href = project.website;
    CARD_CLONE.querySelector(".card-buttons .repository-button").href = project.repository;

    MAIN_CARDS.appendChild(CARD_CLONE);
})

CARD_FIRST.remove();