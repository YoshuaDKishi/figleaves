$(function(){
	
	$('a.scroll').on('click', function(event){
		event.preventDefault();
		
		var $this = $(this);
		var linkTo = $this.attr('href');
		var $target;
		var offset = 0;
		var pos = 0;
		if(linkTo != '#top'){
			$target = $(linkTo);
			pos = $target.offset().top - offset;
		}
		$('html,body').animate({scrollTop: pos}, 800);
	});


     $('.menu_btn').click(function () {
     	event.preventDefault();
	   $('.menu_trigger').toggleClass("active");
	   $('#overlay').toggleClass('active');
	});


    $('.sp_nav_item').click(function(){
       $('.menu_trigger').removeClass("active");
       $('#overlay').removeClass('active');
    });


	$('.tab_content').click(function() {
		var index = $('.tab_content').index(this);
		$('.tab_list').css('display','none');
		$('.tab_list').eq(index).css('display','block');
		$('.tab_content').removeClass('select');
		$(this).addClass('select');
	});


	$('.voice_slider').bxSlider({
		auto: false,
		infiniteLoop: true,
		slideWidth: 400,
		minSlides: 1,
		maxSlides: 3,
		moveSlides: 1,
		slideMargin: 6
	});

    imagesProgress();

    function imagesProgress () {

        var $container    = $('#progress'),                   
            $progressBar  = $container.find('.progress_bar'), 
            $progressText = $container.find('.progress_text'),
           
            imgLoad       = imagesLoaded('body'),
            imgTotal      = imgLoad.images.length,

            
            imgLoaded     = 0,
            current       = 0,

         
            progressTimer = setInterval(updateProgress, 1000 / 60);

        
        imgLoad.on('progress', function () {
            imgLoaded++;
        });

       
        function updateProgress () {

            var target = (imgLoaded / imgTotal) * 100;

            current += (target - current) * 0.1;

            $progressBar.css({ width: current + '%' });
            $progressText.text(Math.floor(current) + '%');

            if(current >= 100){
                clearInterval(progressTimer);
                $container.addClass('progress_complete');
                $progressBar.add($progressText)
                    .delay(500)
                    .animate({ opacity: 0 }, 250, function () {
                        $container.animate({ top: '-100%' }, 1000, 'easeInOutQuint');
                    });
            }

            // current が 99.9 より大きければ 100 と見なして終了処理へ
            if (current > 99.9) {
                current = 100;
            }
        }
    }



});