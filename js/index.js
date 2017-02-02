var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd: function (swiper) {
        [].forEach.call(swiper.slides,function(item,index) {
            item.classList.remove('animation');
        });
        swiper.slides[swiper.activeIndex].classList.add('animation');
    }
});