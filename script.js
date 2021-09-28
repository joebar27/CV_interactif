//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar1');

window.addEventListener('scroll', function () {
    const scrollTop = window.pageTOffset ||
        this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

//TYPED
/* Pour plus de parametre de ce script se référer au github suivant: https://github.com/mattboldt/typed.js/ */
var typed = new Typed('.typed', {
    strings: [
        'Je suis un exelent développeur, désir',
        'Je suis un développeur, désireux de développer constamment mes compétences afin d\'assurer mon compte en banque',
        'Je suis un développeur, désireux de développer constamment mes compétences afin d\'assurer mon évolution professionnelle, je suis confiant en ma capacité à proposer des idées intéressantes. Après une carrière m\'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 10 métiers différents.',
        'Je suis un développeur, désireux de développer constamment mes compétences afin d\'assurer mon évolution professionnelle, je suis confiant en ma capacité à proposer des idées intéressantes. Après une carrière m\'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 10 métiers différents. J\'ai décidé de me lancer a fond dans l\'apprentissage du code, depuis plus de 2 ans je me forme en autodidacte aux langages Front tels que HTML, CSS, javascript afin de devenir le plus grand développeur',
        'Je suis un développeur, désireux de développer constamment mes compétences afin d\'assurer mon évolution professionnelle, je suis confiant en ma capacité à proposer des idées intéressantes. Après une carrière m\'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 10 métiers différents. J\'ai décidé de me lancer a fond dans l\'apprentissage du code, depuis plus de 2 ans je me forme en autodidacte aux langages Front tels que HTML, CSS, javascript afin de devenir le plus rapidement possible développeur. Plus qu\'un avenir professionnel, je me suis découvert une passion,',
        'Je suis un développeur, désireux de développer constamment mes compétences afin d\'assurer mon évolution professionnelle, je suis confiant en ma capacité à proposer des idées intéressantes. Après une carrière m\'ayant fait découvrir plusieurs milieux professionnels et exercer plus de 10 métiers différents. J\'ai décidé de me lancer a fond dans l\'apprentissage du code, depuis plus de 2 ans je me forme en autodidacte aux langages Front tels que HTML, CSS, javascript afin de devenir le plus rapidement possible développeur. Plus qu\'un avenir professionnel, je me suis découvert une passion, celle de CODER.'
    ],
    typeSpeed: 35,
    backSpeed: 20,
    startDelay: 1000,
    smartBackspace: true, // this is a default
    backDelay: 1000,
    loop: false
});

//COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function () {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function () {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 10000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});

