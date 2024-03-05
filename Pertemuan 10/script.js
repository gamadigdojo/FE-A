// mengubah teks setelah dokument dimuat
$(document).ready(function(){
    $("h1").text("Selamat pagi")
})

// Selector using jQuery for class, id, html
$(document).ready(function(){
    $("#test").css("color","red")
})

// events menggunakan jQuery

// click
$(document).ready(function(){
    $(".box1").click(function(){
        $(this).css("color","red")
    })
})

// hover
$(document).ready(function(){
    $(".box2").hover(function(){
        $(this).css("color","blue")
    })
})

// Penggunaan jQuery effect:

// animate
$("#animatedElement").click(function(){
    $(this).animate({
        left: '250px',
        opacity: '0.5',
        height: '+=150px',
        width: "+=150px"
    }, 1000)
})

// delay
$("#delay").click(function(){
    $(this).fadeOut(1000).delay(5000).fadeIn(1000)
})
// fadein gaakan bisa jalan kalo gaada fadeout(elemennya harus ilang dulu)

// fadeOut & fadeIn
$("#fade").click(function(){
    $(this).fadeOut(1000).fadeIn(1000)
})

// fadeTo
$(".fadeTo").click(function(){
    $(this).fadeTo("slow", 0.1)
})

// fade Toggle
$("#fadeToggle").click(function(){
    $(this).fadeToggle()
})

// hide & show
$("#hns").click(function(){
    $(this).hide(1000).show(1000)
})


// toggle
$("#toggle").click(function(){
    $(this).toggle(1000)
})

// slideUp & slideDown
$("#und").click(function(){
    $(this).slideUp(1000).slideDown(1000)
})

// slideToggle
$("#st").click(function(){
    $(this).slideToggle(1000)
})

// manipulasi jQuery DOM Elements menggunakan class

$(document).ready(function(){

    // addClass

    $('#add').click(function(){
        $("#content").addClass("highlight")
    })

    // removeClass
    $("#remove").click(function(){
        $("#content").removeClass("highlight")
    })

})

