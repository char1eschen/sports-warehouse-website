//slideshow
//if javascripts is not available, just hidden
// $("#slideshow").css("display", "block");

var pauseTime = 4000;

var slides = $("#slideshow .slide");
var currentSlide = 0;
var slideInterval = setTimeout(slideshow,pauseTime);

//nav dots
var navDots = $("#nav-dots li");

function slideshow() {
    slides.removeClass("showing");
    currentSlide = (currentSlide+1)%slides.length;    
    slides.eq(currentSlide).addClass("showing");

    navDots.removeClass("active");
    $(navDots[currentSlide]).addClass("active");

    slideInterval = setTimeout(slideshow,pauseTime)
}

navDots.on("click", function(){
    //Find index of dot
    var index = navDots.index($(this));
    currentSlide = index - 1;

    //reset timer & force slide change
    clearTimeout(slideInterval);
    slideshow();
});


//menubar
$(function(){
    $("#menu").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }   
        $("#menubar").slideToggle();
        $(this).toggleClass("active");
    });
    $("#menubar").click(function(event){
        var e=window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        }
    });
    document.onclick = function(){
        $("#menubar").slideToggle();
        $(this).toggleClass("active");
    };
})

//othermenu
$("#other").click(function () {
    if($("#othermenu").css("display") == "none") {
        $("#othermenu").css("display", "block");
        return false;
    } 
    else {
        $("#othermenu").css("display", "none");
        return false;
    }
});

//left-arrow and right-arrow
var itemNum = $("#show-feature-products").children().length;
var turnLeft =  $("#turn-left");
var turnRight = $("#turn-right");
var scrollBarWidth = itemNum * 200;
//display arrows if feature products over 5
if (itemNum > 5) {
    turnLeft.addClass("show-arrow");
    turnRight.addClass("show-arrow");
}
//click right arrow
$("#turn-right").click(function(){
    var list = $("#feature-products");
    if(scrollBarWidth - list.scrollLeft() < 1000){
        list.animate({scrollLeft:0},1000);
    }else{
        list.animate({scrollLeft:list.scrollLeft()+1000},1000);
    }
});
//click left arrow
$("#turn-left").click(function(){
    var list = $("#feature-products");
    if(list.scrollLeft() < 1000){
        list.animate({scrollLeft:0},1000);
    }else{
        list.animate({scrollLeft:list.scrollLeft()-1000},1000);
    }
});
