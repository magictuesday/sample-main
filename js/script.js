$(function () {
    // 이미지 슬라이드
    $('.slide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotHover: false,
    })
})