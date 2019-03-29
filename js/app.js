var $body       = $('body')

var backgrounds = [
    { src: 'img/01.jpg',  },
    { src: 'img/04.jpg',  },
    { src: 'img/03.jpg',  },
    { src: 'img/01.jpg', delay: 1000, video: [
        
    ] }
];

$('html').addClass('animated');

var displayBackdrops = false;

$body.vegas({
    preload: true,
    overlay: '/js/01.png',
    transitionDuration: 1500,
    delay: 4000,
    slides: backgrounds,
    walk: function (nb, settings) {
        if (settings.video) {
            $('.logo').addClass('collapsed');
        } else {
            $('.logo').removeClass('collapsed');
        }
    }
});

