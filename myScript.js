function toggleOpacity(){
    if(window.matchMedia('(max-width:991px)').matches){
        $(".navbar").css("background-color", "rgba(40, 44, 52, 0.9)");

        $(document).scroll(function(event){
            $(".navbar").css("background-color", "rgba(40, 44, 52, 0.9)");
        });
    }
    else{
        if($(document).scrollTop() < ($(".parallax").height() - $(".navbar").height())){
            $(".navbar").css("background-color", "rgba(255, 255, 255, 0)");
        }

        $(document).scroll(function(event){
            if($(document).scrollTop() > ($(".parallax").height() - $(".navbar").height())){
                $(".navbar").css("background-color", "rgba(40, 44, 52, 0.9)");
            }
            else{
                $(".navbar").css("background-color", "rgba(255, 255, 255, 0)");
            }
        });
    }
}

$(toggleOpacity);
$(window).resize(toggleOpacity);