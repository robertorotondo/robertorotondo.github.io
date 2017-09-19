jQuery.noConflict()(function($) {
    "use strict";
    // makes sure the whole site is loaded
    $("#status").css('display', 'block');
    $("#preloader").css('display', 'block');
    $(document).ready(function() {
        $('.oi_page_holder').css('visibility', 'visible');
        // will first fade out the loading animation
        $("#status").fadeOut("slow");
        // will fade out the whole DIV that covers the website.
        $("#preloader").fadeOut("slow");
		
		/*$("#ajax-contact-form").submit(function() {
            // this points to our form
            var str = $(this).serialize(); // Serialize the data for the POST-request
            var result = '';
            $.ajax({

                type: "POST",
                url: 'contact.php',
                data: str,
                success: function(msg) {
                    if (msg == 'OK') {
                        result = '<div class="alert alert-info">Message was sent to website administrator, thank you!</div>';
                        $("#fields").hide();
                    } else {
                        result = msg;
                    }
                    $("#note").html(result);

                }
            });
            return false;
        });*/
		
		
    });
    
    $('#menu-header').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
    });

    $('.oi_head_bg').css('opacity', 0);
    $('.oi_head_bg').animate({
        opacity: 1,
    }, 1000, function() {});

    $('.oi_vc_button').each(function(index, element) {
        var oi_color = $(this).css("color");
        var oi_bg = $(this).css("background-color");
        var oi_border_color = $(this).css("borderTopColor");
        $(element).hover(
            function() {
                $(this).css({
                    'color': $(this).attr('data-title-color-hover'),
                    'background': $(this).attr('data-bg-color-hover'),
                    'border-color': $(this).attr('data-border-c-hover')
                });
            },
            function() {
                $(this).css({
                    'color': oi_color,
                    'background': oi_bg,
                    'border-color': oi_border_color
                });
            }
        );
    });

    $(".oi_custom_heading_holder").each(function(index) {
        $(this).find(".oi_heading_icon:not(.oi_heading_icon_center)").css('margin-top', ($(this).height() - $(this).find('i').height()) / 2);
    });

    $(".oi_custom_heading_holder").each(function(index) {
        $(this).find(".oi_heading_icon:not(.oi_heading_icon_center)").css('margin-top', ($(this).height() - $(this).find('i').height()) / 2);
    });
    /*if ($("div").is("#map")) {
        $("#map").gmap3({
            marker: {
                // address:"93 Worth St, New York, NY",
                address: "7th Ave, New York, NY",
                options: {
                    icon: "assets/images/marker.png"
                }
            },
            map: {
                options: {
                    styles: [{
                        stylers: [{
                            "saturation": -100
                        }, {
                            "lightness": 0
                        }, {
                            "gamma": 0.5
                        }]
                    }, ],
                    zoom: 13,
                    scrollwheel: false,
                    draggable: true
                }
            }
        });
    };*/


    $('#oi_glitch').height($(window).outerHeight());
    

    if ($('body').width() > 1200) {
        if ($('body').hasClass('home')) {
            $('.oi_head_holder').css('height', $(window).height());
            var mt = $('.oi_logo_holder').css('margin-top').replace(/[^-\d\.]/g, '');
            var mt_text = $('.oi_legend_holder').offset().top;

            $(window).scroll(function() {
                var st = $(this).scrollTop();

                $('.oi_head_bg').css({
                    'opacity': (1 - st / ($(window).height() - 200)),
                    'background-position': 'center ' + parseInt(-st / 2) + 'px'
                });
                $('.scroll-icon').css({
                    'opacity': (1 - st / ($(window).height() - 800))
                });


                if (st >= (mt - 40)) {
                    $('.oi_logo_holder').addClass('oi_fixed');
                    $('.oi_legend_holder').css({
                        'opacity': (1 - st / ($(window).height() - 700)),
                        'margin-top': 460 - parseInt(st / 3)
                    });

                } else {
                    $('.oi_logo_holder').removeClass('oi_fixed');
                    $('.oi_legend_holder').css({
                        'opacity': (1 - st / ($(window).height() - 600)),
                        'margin-top': 200
                    });
                };



                if (st >= ($(window).height() - 100)) {
                    $('.oi_logo_holder.oi_fixed').css('background', '#f5f5f5');
                    $('.oi_head_holder.oi_black').removeClass('background--dark');

                } else {
                    $('.oi_logo_holder.oi_fixed').css('background', '');

                    $('.oi_head_holder.oi_black').addClass('background--dark');
                }
            });

        } else {

            $('.oi_head_holder').css('height', $(window).height() / 2);
            var mt = $('.oi_logo_holder').css('margin-top').replace(/[^-\d\.]/g, '');
            $(window).scroll(function() {
                var st = $(this).scrollTop();
                $('.oi_head_bg').css({
                    'opacity': (1 - st / ($(window).height() / 2 - 150)),
                    'background-position': 'center ' + parseInt(-st / 2) + 'px'
                });

                if (st >= (mt - 40)) {
                    $('.oi_logo_holder').addClass('oi_fixed');
                    $('.oi_legend_holder').css({
                        'opacity': (1 - st / 200),
                        'margin-top': 280 - parseInt(st / 3)
                    });
                } else {
                    $('.oi_logo_holder').removeClass('oi_fixed');
                    $('.oi_legend_holder').css({
                        'opacity': (1 - st / ($(window).height() - 600)),
                        'margin-top': 150
                    });
                };


                if (st >= ($(window).height() / 2 - 100)) {
                    $('.oi_logo_holder.oi_fixed').css('background', '#f5f5f5');
                    $('.oi_head_holder.oi_black').removeClass('background--dark');
                } else {
                    $('.oi_logo_holder.oi_fixed').css('background', '');
                    $('.oi_head_holder.oi_black').addClass('background--dark')
                }

            });

        }

    } else {
        ////////////////////////
        //FOR MIBILE!!!
        ////////////////////////

        $('.oi_head_holder').css('height', $(window).height());
        var mt = $('.oi_logo_holder').css('margin-top').replace(/[^-\d\.]/g, '');
        var mt_text = $('.oi_legend_holder').offset().top;

        $(window).scroll(function() {
            var st = $(this).scrollTop();

            $('.scroll-icon').css({
                'opacity': (1 - st / ($(window).height() - 800)),
            });
        });

    };
    $('.oi_go_to_top').css('margin-top', ($('.oi_footer_holder').height() - $('.oi_go_to_top').height()) / 2);
	
	$("a[href='#top']", ".oi_footer_holder").on("click", function(e) {
   	 e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
	});
	
	/*$("a[href='#end_header']", ".scroll-icon").on("click", function(e) {
    	e.preventDefault();
        $('body,html').animate({
            scrollTop: ($('.oi_head_holder').height() - 100)
        }, 400);
        return false;
    });*/
    
       
	$(".oi_xs_menu", ".oi_head_holder").on("click", function(e) {
        $('.oi_header_menu_fixed').toggleClass('oi_v_menu');
    });


  
    $('table:not(#wp-calendar)').addClass('table table-striped table-bordered');
    $('.oi_blog_post_content_holder a').addClass('colored');
    $('.oi_single_post_content_holder a').addClass('colored');


// PORTFOLIO FILTERING - ISOTOPE
//**********************************

	/*if ($("div").is(".oi_port_container")) {
		var $container = $('.oi_port_container');
	
		if ($container.length) {
			//$('.oi_portfolio_page_holder').css('min-height',$(window).height())
			$container.waitForImages(function() {
	
				// initialize isotope
				$container.isotope({
					itemSelector: '.oi_strange_portfolio_item',
					layoutMode: 'masonry',
				});
	
				$('#filters a:first-child').addClass('filter_current');
				// filter items when filter link is clicked
				 $("a", "#filters").on("click", function(e) {
					var selector = $(this).attr('data-filter');
					$container.isotope({
						filter: selector
					});
					$(this).removeClass('filter_button').addClass('filter_button filter_current').siblings().removeClass('filter_button filter_current').addClass('filter_button');
	
					return false;
				});
	
			}, null, true);
		}
	};*/

    //portfolio filter (isotop) initializing. 
    var $grid = $('.oi_port_container').isotope({
        itemSelector: '.oi_strange_portfolio_item',
        layoutMode: 'masonry'
    });

    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });

    //forcing a perfect masonry layout after initial load
    setTimeout(function() {
        var $grid = $('.oi_port_container').isotope({
            itemSelector: '.oi_strange_portfolio_item',
            layoutMode: 'masonry'
        });

        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });
    }, 1000);
    //Isotope ReLayout on Page Load event.
    $(window).load(function() {
        
        var $grid = $('.oi_port_container').isotope({
            itemSelector: '.oi_strange_portfolio_item',
            layoutMode: 'masonry'
        });

        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });
    });
    //Isotope ReLayout on Window Resize event.
    $(window).on('resize', function() {
        
        var $grid = $('.oi_port_container').isotope({
            itemSelector: '.oi_strange_portfolio_item',
            layoutMode: 'masonry'
        });

        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });
    });
});	