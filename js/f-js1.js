$(document).ready(function () {



    /* search head text*/
    $("#search-btn").click(function () {
        $("#search_var").hide();

        $("#search_var").text("SEARCH RESULTS FOR " +
            $("#search-input").val());
        $("#search_var").fadeIn();
    })


    /*scroll-trendbar*/








    $(".l-arrow").click(function () {

        var l = 200 - $(".outer-gal").scrollLeft();
        $(".outer-gal").scrollTo(-l, 200);



    })

    $(".r-arrow").click(function () {
        var r = 200 + $(".outer-gal").scrollLeft();
        $(".outer-gal").scrollTo(r, 200);



    })



    /*   */



    /*Making header dynamic*/

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;

    var navbarHeight = $('.header').outerHeight();
    //var landimgheight = $('.')


    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 0);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= 0) {


            return;
        }
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.

        if (st > lastScrollTop && st > (navbarHeight - 100)) {
            // Scroll Down
            $('.header').addClass('nav-up');
            $('.search_head').addClass('fix_head');
            $('.main_cont').addClass('main_dyn');
            $('.sug_wrapper').addClass('sug_dyn');
            //            $('.footer_container').addClass('footer_dyn');
        } else {

            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('.header').removeClass('nav-up');
                $('.search_head').removeClass('fix_head');
                $('.main_cont').removeClass('main_dyn');
                $('.sug_wrapper').removeClass('sug_dyn');
                $('.footer_container').removeClass('footer_dyn');
            }
        }


        lastScrollTop = st;
    }


    /*JSON FETCHING*/







    var searchobj = '';
    var search = "SUNNY LEONE";
    var land_trend = "trend";

    $.get('res/search.html', function (data) {
        searchobj = JSON.parse(data);
    });

    var x = setInterval(function () {

        if (searchobj != '') {
            clearInterval(x);
            getresult(searchobj[search].details);
            getsug(searchobj[search].details);
        }
    }, 300);

    var scrollpos = $(window).scrollTop();






    var getresult = function (details) {

        var details = details;
        for (var n in details) {

            var name = details[n].name;
            var description = details[n].description;
            var imageurl = details[n].imageurl;
            var dark = details[n].dark;
            var end_text = details[n].end_text;


            //
            //            if (details.length > 0) {
            $('.result-wrapper ').append('<results-f name="' + name + '" description="' + description + '"imageurl="' + imageurl + '"><div class="col-6 "><f-rating rate=4.5 > </f-rating></div></results - f>');



        };
    }


    var getsug = function (details) {
        var n;
        var details = details;
        for (n in details) {

            var name = details[n].name;

            var imageurl = details[n].imageurl;
            var dark = details[n].dark;




            //            if (details.length > 0) {
            $('sug_container-f .sug_content').append('<suggestions-f name=" ' + name + '" image_celeb=" ' + imageurl + ' "><f-buttons likes="34k " dislikes="200 "></f-buttons> <f-rating rate="4.5 "> </f-rating> </suggestions-f>');
            //                $('.end_text').append("THAT'S ALL FOLKS");
            //            } else {
            //
            //
            //                $('.result-wrapper').append('<div class="empty"></div>');
            //
            //                $("#search-btn").click(function () {
            //                    $("#end_text2").hide();
            //
            //                    $("#end_text2").text("NO RESULTS FOUND FOR " +
            //                        $("#search-input").val());
            //                    $("#end_text2").fadeIn();
            //                    $("#search_var").hide();
            //
            //                })
            //            }

        };
    }









    //    if ($(".search_continer").outerHeight() <= 500) {
    //        $(".footer_container").addClass("abs");
    //        $(".sug_wrapper").addClass("sug_abs");
    //        $(".header").addClass("");
    //
    //        //        $(".footer_container").addClass("top",ht);
    //    }





});