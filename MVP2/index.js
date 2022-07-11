//slide header
let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");

function plusSlides(n) {
    showSlides(slideIndex += n);
}

plusSlides(1)


function showLearnSlide() {
    let learnSlide = document.getElementsByClassName("slideLearn__item");
    for (let i = 0; i < learnSlide.length; i++) {
        // learnSlide[i].style.display = "none";
    }
}

setTimeout(showLearnSlide, 0);


function showSlides(n) {
    let i;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Slide Learn
$('.slideLearn__slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // arrows: true,
    autoplaySpeed: 1000,
    prevArrow: "<button>" +
        "<span class=\"flex items-center justify-center arrow-left\">\n" +
        "<i class=\"fa-solid fa-angle-left \"></i></span></button>",
    nextArrow: "<button class='arrow-right'> <span class=\"flex items-center justify-center arrow-right\">\n" +
        " <i class=\"fa-solid fa-angle-right\"></i>\n" +
        "  </span></button>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],

});


fetch('https://60d4611a61160900173cb070.mockapi.io/courses').then(
    res => res.json()
).then(data => {
    createOurCourses(data);
})

function createOurCourses(data) {
    let ourCourses = document.getElementById('ourCourses');
    let html = '';

    for (let i = 0; i < data.length; i++) {
        let star = '';
        let price = data[i].price;
        if (data[i].price == 0) {
            price = 'Free';
        }
        for (let j = 0; j < 5; j++) {
            if (j + 1 < data[i].rate) {
                star += '<i class="fa-solid fa-star fa-star-active"></i>';
            } else {
                star += '<i class="fa-solid fa-star"></i>';
            }
        }
        html +=
            ' <div class="ourCourses__content__item grid gird-row-2">\n' +
            '                <div class="ourCourses__content__item__img">\n' +
            '                    <img src="' + data[i].image + '" alt="">\n' +
            '                </div>\n' +
            '                <div class="ourCourses__content__item__price">\n' +
            '                    <span>' + price + '</span>\n' +
            '                </div>\n' +
            '                <div class="ourCourses__content__item__content">\n' +
            '                    <div class="ourCourses__content__item__content__Rate flex ">\n' +
            '                        <div class="ourCourses__content__star">\n' +
            star +

            '                        </div>\n' +
            '                        <span>(' + data[i].rate_quantity + ' review)</span>\n' +
            '                    </div>\n' +
            '                    <div class="ourCourses__content__item__content__title">\n' +
            '                        <a href="#">\n' +
            '                            ' + data[i].name + '\n' +
            '                        </a>\n' +
            '                    </div>\n' +
            '\n' +
            '                    <div class="ourCourses__content__item__content__bottom flex justify-between">\n' +
            '                        <div class="flex ">\n' +
            '                            <img src="img/student_1.jpg" alt="student avatar">\n' +
            '                            <span>' + data[i].teacher + '</span>\n' +
            '                        </div>\n' +
            '                        <div class="flex items-baseline" style="padding-top: 3%">\n' +
            '                            <i class="fa-regular fa-user" style="color: #ffc600"></i>\n' +
            '                            <span>' + data[i].total_enrolled + '</span>\n' +
            '                        </div>\n' +
            '\n' +
            '                    </div>\n' +
            '\n' +
            '                </div>\n' +
            '            </div>'
    }
    ourCourses.innerHTML = html;
    slideOurCourses();
}

function slideOurCourses() {
    $('.ourCourses__content').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        // arrows: true,
        autoplaySpeed: 1000,
        prevArrow: "<button class='ourCourses__button__arrLeft' style='top: -62px;\n" +
            "    position: absolute;\n" +
            "    left: 1055px;'><i class=\"fa-solid fa-angle-left\"></i></button>",
        nextArrow: "<button class='ourCourses__button__arrRight' style='position: absolute;\n" +
            "    right: 0px;\n" +
            "    top: -62px;'><i class=\"fa-solid fa-angle-right\"></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}

$('.feedback__content').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    // autoplaySpeed: 1000,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$('.sliderFooter__content').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
    ],
});

let headerMenu = document.getElementById('headerMenu__menu__toggle');
function toggleHeaderMenu() {
    headerMenu.classList.toggle('activeHeaderMenu');
}