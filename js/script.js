$(document).ready(function () { $(window).on("scroll", function () { 600 < $(this).scrollTop() ? $(".scroll-top").fadeIn(600) : $(".scroll-top").fadeOut(600) }), $(".scroll-top").on("click", function () { return $("html,body").animate({ scrollTop: 0 }, 500), !1 }), $("#about-carousel").owlCarousel({ loop: !0, margin: 10, nav: !0, autoplay: !0, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 1 } } }), $("#portfolio-carousel").owlCarousel({ loop: !0, margin: 10, nav: !0, autoplay: !0, responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 } } }), $("#partners-carousel").owlCarousel({ center: !0, items: 2, loop: !0, margin: 10, autoplay: !0, time: 500, responsive: { 600: { items: 5 } } }), $("#status").fadeOut(), $("#preloader").delay(450).fadeOut("slow"), $(".nav-link").smoothScroll(), $(window).on("scroll", function () { $(window).scrollTop() ? $("#main-nav").addClass("sticky-anema") : $("#main-nav").removeClass("sticky-anema") }); new Swiper(".swiper-container", { autoplay: !0, loop: !0, pagination: { el: ".swiper-pagination", clickable: !0, renderBullet: function (o, a) { return '<span class="' + a + '">' + (o + 1) + "</span>" } } }); $(".navbar-nav").onePageNav({ currentClass: "active", changeHash: !1, scrollSpeed: 750, scrollThreshold: .5, filter: "", easing: "swing" }) });