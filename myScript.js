function toggleOpacity(){
    /*if(window.matchMedia('(max-width:991px)').matches){
        $(".navbar").css("background-color", "rgba(40, 44, 52, 0.9)");

        $(document).scroll(function(event){
            $(".navbar").css("background-color", "rgba(40, 44, 52, 0.9)");
        });
    }*/
    //else{
        if($(document).scrollTop() <= ($(".offset").height() - $(".navbar").height())){
            $(".navbar").css("background-color", "rgba(255, 255, 255, 0)");
            $(".dropdown-menu").css("background-color", "rgba(255, 255, 255, 0)");
        }

        $(document).scroll(function(event){
            if($(document).scrollTop() >= ($(".offset").height() - $(".navbar").height())){
                $(".navbar").css("background-color", "rgba(40, 44, 52, 0.9)");
                $(".dropdown-menu").css("background-color", "rgba(40, 44, 52, 0.9)");
            }
            else{
                $(".navbar").css("background-color", "rgba(255, 255, 255, 0)");
                $(".dropdown-menu").css("background-color", "rgba(255, 255, 255, 0)");
            }
        });
    //}
}

function scrollTrigger(selector){
    let els = document.querySelectorAll(selector);
    els = Array.from(els);

    els.forEach(el => {
        addObserver(el, options);
    })
}

function addObserver(el, options){
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active')
                observer.unobserve(entry.target)
            }
        })
    })

    observer.observe(el)
}

scrollTrigger('.scroll-animate', {rootMargin:"-200px"})

$(toggleOpacity);
$(window).resize(toggleOpacity);