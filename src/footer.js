function playcategoryPageProductSlider() {
    categoryPageProductSlider.trigger("play.owl.autoplay", [1e3])
}

function stopcategoryPageProductSlider() {
    categoryPageProductSlider.trigger("stop.owl.autoplay")
}

function playproductCarOwl() {
    productCarOwl.trigger("play.owl.autoplay", [1e3])
}

function stopproductCarOwl() {
    productCarOwl.trigger("stop.owl.autoplay")
}

function playowlAboutLogo() {
    owlAboutLogo.trigger("play.owl.autoplay", [1e3])
}

function stopowlAboutLogo() {
    owlAboutLogo.trigger("stop.owl.autoplay")
}

function playpatiendQuoteOwl() {
    patiendQuoteOwl.trigger("play.owl.autoplay", [1e3])
}

function stoppatiendQuoteOwl() {
    patiendQuoteOwl.trigger("stop.owl.autoplay")
}
$(document).ready(function() {
    setTimeout(function() {
        $("body").hasClass("shop-page") && window.scrollTo(0, 0)
    }, 4e3);
    $(".menu-button.w-nav-button").on("click", function() {
        $("body").toggleClass("fixedPosition");
        $(".menu-button.w-nav-button").hasClass("w--open") ? $("body").removeClass("fixedPosition") : $("body").addClass("fixedPosition");
    });
    $(".menu-button.w-nav-button").on("keyup", function() {
        $("body").toggleClass("fixedPosition");
        $(".menu-button.w-nav-button").hasClass("w--open") ? $("body").removeClass("fixedPosition") : $("body").addClass("fixedPosition");
    });
    $(".w-nav-overlay").on('click',function() {
        $(".menu-button.w-nav-button").hasClass("w--open") && $("body").removeClass("fixedPosition")
    });
    $(".w-nav-overlay").on('keyup',function() {
        $(".menu-button.w-nav-button").hasClass("w--open") && $("body").removeClass("fixedPosition")
    });
    homeHeroOwl = $("#Home-Hero-Slider"), homeHeroOwl.owlCarousel({
        items: 1,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 800,
        stagePadding: 0,
        margin: 0,
        loop: !1,
        rewind: !0,
        nav: !0,
        dots: !0,
        navText: ['<span class="iconify" data-icon="simple-line-icons:arrow-left" data-inline="false"></span>', '<span class="iconify" data-icon="simple-line-icons:arrow-right" data-inline="false"></span>'],
        responsive: {
            0: {
                nav: !1
            },
            480: {
                nav: !0
            },
            786: {}
        }
    });
    let e = homeHeroOwl.find(".owl-dots").width();
    homeHeroOwl.append(`<div tabindex="0" aria-label="slider play button" style="cursor: pointer; position: absolute;bottom: 14px;left: calc(50% + ${e/2+15}px);transform: translate(-50%, 0px);\n\t\twidth: 17px;" class="btn play-btn" id="homeheroplaypause" onclick="togglehomeHeroOwl()">\n\t\t<img src="https://uploads-ssl.webflow.com/61d782c886371c541f58c332/61f0f1f8b3308a00663eb484_pause-button.png">\n      </div>`), productCarOwl = $("#product-cat-owl"), productCarOwl.owlCarousel({
        center: !0,
        items: 2,
        loop: !0,
        margin: 10,
        autoplay: !0,
        URLhashListener: !1,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                navText: ['<span class="iconify" data-icon="simple-line-icons:arrow-left" data-inline="false"></span>', '<span class="iconify" data-icon="simple-line-icons:arrow-right" data-inline="false"></span>']
            },
            768: {
                items: 1,
                nav: !1
            },
            991: {
                items: 2,
                nav: !1
            }
        }
    }), productCarOwl.append('<div class="owl-play-pause"><button aria-label="slider play button" class="btn play-btn" onclick="playproductCarOwl()" onkeyup="playproductCarOwl()">Play</button><button aria-label="slider stop button" class="btn pause-btn" onclick="stopproductCarOwl()" onkeyup="stopproductCarOwl()">Pause</button></div>'), $("#product-cat-owl").on("translated.owl.carousel", function(e) {
        var o = $("#product-cat-owl").find(".owl-item.center .product-cat-slider-item").attr("data-position");
        $("#Product-Cat-Icons-slider-home .owl-item").each(function() {
            var e = $(this).find(".product-cat-icon-2").attr("data-order");
            $(this).find(".product-cat-icon-image-2").removeClass("active"), e == o && $(this).find(".product-cat-icon-image-2").addClass("active")
        })
    }), patiendQuoteOwl = $("#patient-quote-owl"), patiendQuoteOwl.owlCarousel({
        center: !0,
        loop: !0,
        margin: 10,
        responsiveClass: !0,
        nav: !0,
        navText: ['<span class="iconify" data-icon="simple-line-icons:arrow-left" data-inline="false"></span>', '<span class="iconify" data-icon="simple-line-icons:arrow-right" data-inline="false"></span>'],
        responsive: {
            0: {
                items: 1
            },
            769: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    }), patiendQuoteOwl.append('<div class="owl-play-pause"><button aria-label="slider play button" class="btn play-btn" onclick="playpatiendQuoteOwl()" onkeyup="playpatiendQuoteOwl()">Play</button><button aria-label="slider stop button" class="btn pause-btn" onclick="stoppatiendQuoteOwl()" onkeyup="stoppatiendQuoteOwl()">Pause</button></div>'), owlAboutLogo = $("#owl-about-logo"), owlAboutLogo.owlCarousel({
        center: !0,
        loop: !0,
        items: 1,
        nav: !0,
        navText: ['<span class="iconify" data-icon="simple-line-icons:arrow-left" data-inline="false"></span>', '<span class="iconify" data-icon="simple-line-icons:arrow-right" data-inline="false"></span>'],
        dots: !0,
        responsive: {
            660: {
                items: 1
            }
        }
    }), owlAboutLogo.append('<div class="owl-play-pause"><button aria-label="slider play button" class="btn play-btn" onclick="playowlAboutLogo()" onkeyup="playowlAboutLogo()">Play</button><button aria-label="slider stop button" class="btn pause-btn" onclick="stopowlAboutLogo()" onkeyup="stopowlAboutLogo()">Pause</button></div>'), $("#Product-Cat-Icons-slider").owlCarousel({
        loop: !1,
        items: 1,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 4,
                loop: !0,
                center: !0
            },
            450: {
                items: 5,
                loop: !0,
                center: !0
            },
            500: {
                items: 6,
                loop: !0,
                center: !0
            },
            769: {
                items: 6,
                loop: !0,
                center: !0
            },
            991: {
                items: 9
            }
        }
    }), $("#Product-Cat-Icons-slider-home").children().each(function(e) {
        $(this).attr("data-position", e)
    }), owlProductCatIconHome = $("#Product-Cat-Icons-slider-home"), owlProductCatIconHome.owlCarousel({
        loop: !1,
        items: 1,
        nav: !1,
        dots: !1,
        center: !1,
        autoplay: !1,
        responsive: {
            0: {
                items: 4,
                loop: !0,
                center: !0
            },
            769: {
                items: 6,
                loop: !0,
                center: !0
            },
            991: {
                items: 9
            }
        }
    });
    $(document).on("click", "#Product-Cat-Icons-slider-home .owl-item > a", function() {
        $("#product-cat-owl").trigger("to.owl.carousel", [$(this).data("position"), 300])
    });
    $(document).on("keyup", "#Product-Cat-Icons-slider-home .owl-item > a", function() {
        $("#product-cat-owl").trigger("to.owl.carousel", [$(this).data("position"), 300])
    });
    $("#Product-Cat-Icons-slider-2").owlCarousel({
        loop: !1,
        items: 1,
        nav: !1,
        dots: !1,
        responsive: {
            0: {
                items: 4,
                loop: !0,
                center: !0
            },
            769: {
                items: 8
            }
        }
    }), categoryPageProductSlider = $("#category-page-product-slider"), categoryPageProductSlider.owlCarousel({
        items: 1,
        nav: !0,
        margin: 30,
        navText: ['<span class="iconify" data-icon="simple-line-icons:arrow-left" data-inline="false"></span>', '<span class="iconify" data-icon="simple-line-icons:arrow-right" data-inline="false"></span>'],
        dots: !1,
        responsive: {
            0: {
                items: 1,
                nav: !0,
                dots: !1
            },
            450: {
                items: 3,
                nav: !1,
                dots: !1
            },
            769: {
                items: 4,
                nav: !1
            },
            991: {
                items: 5
            },
            1200: {
                items: 7
            }
        }
    }), categoryPageProductSlider.append('<div class="owl-play-pause"><button aria-label="slider play button" class="btn play-btn" onclick="playcategoryPageProductSlider()" onkeyup="playcategoryPageProductSlider()">Play</button><button aria-label="slider stop button" class="btn pause-btn" onclick="stopcategoryPageProductSlider()" onkeyup="stopcategoryPageProductSlider()">Pause</button></div>'), $(".dispensaries-item-footer").each(function() {
        $(this).find(".lightbox-image").each(function(e) {
            var o = $(this).attr("src");
            0 == e ? $(this).wrap('<a class="dispensaries-list-item-link lightbox-link primary-link" href="' + o + '">View Photos</a>') : $(this).wrap('<a class="lightbox-link secondary-link" href="' + o + '">Secondary Links</a>')
        })
    }), $(".dispensaries-item-footer").each(function(e, o) {
        $(o).find("a.lightbox-link").each(function() {
            "" != $(this).attr("href") && $(this).attr("data-lightbox", "group-" + e)
        })
    }), $(".footer-blog.featured > div").hasClass("w-dyn-empty") && ($(".footer-blog.featured").css("display", "none"), $(".footer-blog.latest").css("display", "block")), $($(".dis-loc-dropdown .w-dyn-item  ").get().reverse()).each(function(e, o) {
        var t = $(this).find("h3").text(),
            a = $(this).find("p").text();
        $("#Dispensary-Location").append('<option value="' + a + '">' + t + "</option>")
    });
    var o = window.location.pathname.split("/").pop();
    $("#Dispensary-Location option").each(function() {
        lowerText = $(this).text().toLowerCase().replace(/ /g, "-"), console.log(lowerText), lowerText == o ? $(this).prop("selected", !0) : "jax-beach" == o && "jacksonville-beach" == lowerText ? $(this).prop("selected", !0) : "ft-myers" == o && "fort-myers" == lowerText ? $(this).prop("selected", !0) : "deerfield" == o && "deerfield-beach" == lowerText && $(this).prop("selected", !0)
    }), $($("#location-item-for-dropdown .w-dyn-item").get().reverse()).each(function(e, o) {
        var t = $(this).find("a").text(),
            a = $(this).find("a").attr("href");
        $("#wf-form-Location-Dropdown .w-select").append('<option value="' + a + '">' + t + "</option>")
    }), $("#wf-form-Location-Dropdown .w-select").change(function() {
        var e = $(this).children("option:selected").val();
        window.location = e
    });
    $("#subscribe-submit").on('click',function(e) {
        e.preventDefault()
    });
    $("#subscribe-submit").on('keyup',function(e) {
        e.preventDefault()
    });
    var t = $(".expiration_date").text();
    $(".bar-container .bar_closer").click(function() {
            $("body").removeClass("covid-visible"), $(".bar-collection").removeClass("visible"),
                function(e, o, t) {
                    var a = new Date;
                    a.setTime(a.getTime() + 24 * t * 60 * 60 * 1e3);
                    var i = "expires=" + a.toGMTString();
                    document.cookie = e + "=" + o + ";" + i + ";path=/"
                }("covid-message", "clicked_once", t)
        }),
        function(e) {
            for (var o = e + "=", t = decodeURIComponent(document.cookie).split(";"), a = 0; a < t.length; a++) {
                for (var i = t[a];
                    " " == i.charAt(0);) i = i.substring(1);
                if (0 == i.indexOf(o)) return i.substring(o.length, i.length)
            }
            return ""
        }("covid-message") ? ($("body").removeClass("covid-visible"), $(".home-body .header-navigation").addClass("backToTop")) : ($(".bar-collection").addClass("visible"), $("body").addClass("covid-visible")), $(".bar-collection > div").hasClass("w-dyn-empty") && $(".home-body .header-navigation").addClass("backToTop"), $(".bar-collection .w-dyn-items").bxSlider({
            auto: !0,
            controls: !1,
            touchEnabled: !1,
            pager: !1
        });
        $(".footer-social-list li").on('click',function(e) {
            var o = $(this).data("src");
            console.log(o), window.open(o, "_blank").focus()
        })
        $(".footer-social-list li").on('keyup',function(e) {
            var o = $(this).data("src");
            console.log(o), window.open(o, "_blank").focus()
        })
});
let count = 0;

function togglehomeHeroOwl() {
    if(0 == count){
        homeHeroOwl.trigger("stop.owl.autoplay"), count++;
        $("#homeheroplaypause img").attr('src', 'https://uploads-ssl.webflow.com/61d782c886371c541f58c332/61f0f1fe82e5f082ebeda488_play-button.png');
    }else{
        homeHeroOwl.trigger("play.owl.autoplay", [4e3]), count = 0;
        $("#homeheroplaypause img").attr('src', 'https://uploads-ssl.webflow.com/61d782c886371c541f58c332/61f0f1f8b3308a00663eb484_pause-button.png');
    }
}
window.onload = (event) => {
    $('#homeheroplaypause').focus(function() {
        $(document.documentElement).keyup(function (event) {
            if ( (event.keyCode || event.which) === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                //call function, trigger events and everything tou want to dd . ex : Trigger the button element with a click
                $("#homeheroplaypause").trigger('click');
            }
        });
    });
};

if ($("body").on("click", ".storepoint-gallery-link a", function(e) {
        var o = $(this).attr("data-gallery");
        o = (o = o.replace(/???/g, "")).replace(/???/g, ""), $(".map-id").each(function() {
            $(this).html() == o && $(this).parent().find(".primary-link").trigger("click")
        })
    }), $("body").on("keyup", ".storepoint-gallery-link a", function(e) {
        var o = $(this).attr("data-gallery");
        o = (o = o.replace(/???/g, "")).replace(/???/g, ""), $(".map-id").each(function() {
            $(this).html() == o && $(this).parent().find(".primary-link").trigger("click")
        })
    }), $("#nav-icon3").on('click',function() {
        $(this).toggleClass("open")
    }), $("#nav-icon3").on('keyup',function() {
        $(this).toggleClass("open")
    }),$(".blog-list-title").text(function(e, o) {
        if (o.length > 22) {
            var t = o.split(" ", 4);
            return t.push("..."), t.join(" ")
        }
        return o
    }), $("#no-of-slides").text()) {
    var slides = $("#no-of-slides").text();
    $(".post-slider .w-slider-mask > div").slice(slides).remove()
}
$(".general-blog-post-list .w-condition-invisible").parent().hide(), $(document).ready(function() {
    let e = (new Date).toLocaleString("en-US", {
            timeZone: "America/Atikokan"
        }),
        o = new Date(e);
    ! function e(t) {
        let a = !0;
        t.each(function(e) {
            let t = $(this).find(".start-date"),
                i = $(this).find(".end-date"),
                n = new Date(t.text()),
                l = new Date(i.text());

            function s(e) {
                return !$.trim(e.html())
            }
            if (!s(t) || !s(i)) {
                if (n > o) return homeHeroOwl.trigger("remove.owl.carousel", [e]).trigger("refresh.owl.carousel"), a = !1, !1;
                if (l < o) return homeHeroOwl.trigger("remove.owl.carousel", [e]).trigger("refresh.owl.carousel"), a = !1, !1
            }
        }), a || e($(".home-hero-owl-wrapper"))
    }($(".home-hero-owl-wrapper"))
});