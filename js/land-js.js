/*json-land*/
$(document).ready(function () {

    /*trend buttons*/
    $(".l-arrow").click(function () {

        var l = 200 - $(".outer-gal").scrollLeft();
        $(".outer-gal").scrollTo(-l, 200);
    })

    $(".r-arrow").click(function () {

        var r = 200 + $(".outer-gal").scrollLeft();
        $(".outer-gal").scrollTo(r, 200);



    })





    var jsobj = '';
 
    var land_trend = "trend";
    var land_news = "news";


    $.get('res/land.html', function (data) {
        jsobj = JSON.parse(data);
    });
    var x = setInterval(function () {

        if (jsobj != '') {
            clearInterval(x);

            //            getresult(jsobj[search].details);
            gettrend(jsobj[land_trend].details);
            getnews(jsobj[land_news].news_details);
        }
    }, 300);

    $(".reset").click(function () {

        $("#contact")[0].reset();
    })

});



var gettrend = function (details) {
    var n;
    var details = details;

    for (n = 0; n <= 8; n++) {
        var name = details[n].name;
        var rating = details[n].rating;
        var img = details[n].img;


        $('.inner-gal ul').append('<li><div class="wrap-trend "><f-landtrend name="' + name + '" rating="' + rating + '" img="' + img + '"></f-landtrend> </div></li>')


    }
    var c = $("li").width();
    console.log(c)
    var w = ((c + 65) * (n - 1));

    var t = n;

    $(".inner-gal").css("width", w);


    if ($(".outer-gal").scrollLeft() == 0) {
        $(".l-arrow").addClass("l-arrowl");
    }
    $(".outer-gal").scroll(function () {
        var n = $('.outer-gal').width();
        if ($(".outer-gal").scrollLeft() == 0) {
            $(".l-arrow").addClass("l-arrowl");
        } else {
            $(".l-arrow").removeClass("l-arrowl");
        }

        if ($(".outer-gal").scrollLeft() >= w - n) {

            $(".r-arrow").addClass("r-arrowl");
        } else {
            $(".r-arrow").removeClass("r-arrowl");
        }
    });

};



var getnews = function (news_details) {
    var t;
    var news_details = news_details;
    $('.load h4').click(function () {
        for (t = 0; t < 6; t + 2) {
            var head = news_details[n].head;
            var source = news_details[n].source;
            var desc = news_details[n].desc;
            var img = news_details[n].img;

            $('.outer-news').append('<div class="row"><div class="card col col-7"><f-landnews head="What the hell is it abpout" newsource="NEW York times" description="Respect among rivals -- for tonight, at least! Boston native Ben Affleck is a diehard Red Sox fan, but on Wednesday, July 15, at the 2015 ESPYS, he put his Fenway loyalties aside to honor a former foe: recently retired Yankees shortstop Derek Jeter."img="img/news1.jpg"></f-landnews></div>');
            var c = t + 1;
            var head = news_details[c].head;
            var source = news_details[n].source;
            var desc = news_details[c].desc;
            var img = news_details[c].img;
            $('.outer-news').append('<div class="card col col-5"><f-landnews head="What the hell is it abpout" newsource="NEW York times" description="Respect among rivals -- for tonight, at least! Boston native Ben Affleck is a diehard Red Sox fan, but on Wednesday, July 15, at the 2015 ESPYS, he put his Fenway loyalties aside to honor a former foe: recently retired Yankees shortstop Derek Jeter."img="img/news1.jpg"></f-landnews></div></div>');

        }

    });
};


/*add class to define width of inne-gal*/
