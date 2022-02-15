// Tooltip tecnologias
tippy('.html5-icon', {
    content: 'HTML 5',
});

tippy('.css3-icon', {
    content: 'CSS 3',
});

tippy('.javascript-icon', {
    content: 'Javascript',
});

tippy('.jquery-icon', {
    content: 'jQuery',
});


// Back to top button
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100) {
        toTop.classList.add('active');
    }
    else {
        toTop.classList.remove('active');
    }
})


// Dark/Light mode
const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const mainLinks = document.querySelectorAll('main a');
const card = document.querySelectorAll('.card');
const toTopIcon = document.getElementById('to-top-icon');
const footer = document.querySelector('footer');
const contact = document.getElementsByClassName('fa-brands')
const modeToggle = document.querySelector('.mode-toggle');



modeToggle.addEventListener('click', () => {
    modeToggle.classList.toggle('active');
    body.classList.toggle('light');
    header.classList.toggle('light');
    main.classList.toggle('light');
    toTopIcon.classList.toggle('light');
    footer.classList.toggle('light');

    mainLinks.forEach(link => {
        link.classList.toggle('light');
    });

    card.forEach(link => {
        link.classList.toggle('light');
    })

    for(let i = 0; i < contact.length; i++) {
        contact[i].classList.toggle('light');
    }

    if(main.classList.contains('light')){
        toTopDark.classList.toggle('active');
    }
    else {
        toTopLight.classList.toggle('active');
    }
})

