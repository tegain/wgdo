var Home = {

    /**
     * Init Home functions needed on load
     */
    start: function () {
        this.sliderSwiper();
        this.textLayout();

        // Wait for complete load before initializing News swiper
        $(window).on( 'load', this.newsSwiper() );

        $(window).on('resize', function () {
            setTimeout(Home.textLayout(), 2000);
        });
    },

    /**
     * Home Slider swiper
     * @doc: http://idangero.us/swiper/api/
     */
    sliderSwiper: function () {
        /**
         * Redefine Swiper layout classes
         */
        var swiperContainerClass = 'gu-Home-slider',
            swiperWrapperClass = swiperContainerClass +'__wrapper',
            $swiperSlide = $('.gu-Home-slide');

	    /**
	     * Init News swiper
	     */
	    var homeSlider = new Swiper ('.'+ swiperContainerClass, {
		    loop: false,
		    slidesPerView: 1,
		    grabCursor: true,
		    prevButton: '.'+ swiperContainerClass +'__navPrev',
		    nextButton: '.'+ swiperContainerClass +'__navNext',
		    lazyLoading: true,
		    //observer: true,
            onInit: function () {
	            $swiperSlide.each(function () {
		            var _slide = $(this),
			            _slideBG = $(window).width() > 800 ? _slide.data('picture') : _slide.data('small-picture');

		            _slide.css('background-image', 'url('+ _slideBG +')');
	            });
            }
	    });

    },


    textLayout: function () {
        var mainContainerOffset = $('.container').offset().left;

        if (mainContainerOffset !== 0) {
            //console.log('Positive offset: ', mainContainerOffset)
            $('.gu-Home-text__inner').css('margin-left', mainContainerOffset);
        }
        else {
            //console.log('Offset: ', mainContainerOffset)
            $('.gu-Home-text__inner').removeAttr('style');
        }
    },


    /**
     * Home News swiper
     * @doc: http://idangero.us/swiper/api/
     */
    newsSwiper: function () {
        /**
         * Redefine Swiper layout classes
         */
        var swiperContainerClass = 'gu-News-swiper',
            swiperWrapperClass = swiperContainerClass +'__wrapper',
            swiperSlideClass = 'gu-News-post',
            mainContainerOffset = $('.container').offset().left;
        
        /**
         * Init News swiper
         */
        var newsSlider = new Swiper ('.'+ swiperContainerClass, {
            loop: false,
            slidesPerView: 'auto',
            slidesOffsetBefore: mainContainerOffset,
            grabCursor: true,
            prevButton: '.'+ swiperContainerClass +'__navPrev',
            nextButton: '.'+ swiperContainerClass +'__navNext',
        });
    }, 
};

module.exports = Home;