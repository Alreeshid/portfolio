//Shorthand variables for baseline JS.
let body = document.body;


//Core/Redirection Page Functions

let wrapper = $("#wrapper");

$(document).ready(function(){
    wrapper.animate({width: '82.5%', borderWidth: '7px'}, 600);
    wrapper.animate({height: '95%'}, 800);
});

function infoAnim(e){
    var box = $("#infoButton");
    if(e){
        box.animate({backgroundColor: "black", borderRadius:"50px"}, 400);
        $("#infoButton").stop().animate({opacity: 0},1000,function(){
            $(this).css({'background-image': "url('https://wallpaperaccess.com/full/1347158.jpg')"})
                       .animate({opacity: 1},{duration:1000});
         });
    }
    else if(!e){
        box.animate({backgroundColor: "#426F96", borderRadius:"0px"}, 200);
    }
}

let click = false;

function displayMe(){
    if(!click){
        $("#textRow").fadeIn("fast");
        click = true;
    }
    else{
        $("#textRow").fadeOut("fast");
        click = false;
    }
}

function webAnim(e){
    var box = $("#tb1");
    if(e){
        box.animate({backgroundColor: "black", borderRadius:"50px"}, 400);
        $("#tb1").stop().animate({opacity: 0},1000,function(){
            $(this).css({'background-image': "url('https://wallpaperaccess.com/full/1347158.jpg')"})
                       .animate({opacity: 1},{duration:1000});
         });
    }
    else if(!e){
        box.animate({backgroundColor: "#426F96", borderRadius:"5px"}, 200);
    }
}

function artAnim(e){
    var box = $("#tb2");
    if(e){
        box.animate({backgroundColor: "black", borderRadius:"50px"}, 400);
        $("#tb2").stop().animate({opacity: 0},1000,function(){
            $(this).css({'background-image': "url('https://wallpaperaccess.com/full/1347158.jpg')"})
                       .animate({opacity: 1},{duration:1000});
         });
    }
    else if(!e){
        box.animate({backgroundColor: "#426F96", borderRadius:"5px"}, 200);
    }
}

function certAnim(e){
    var box = $("#tb3");
    if(e){
        box.animate({backgroundColor: "black", borderRadius:"50px"}, 400);
        $("#tb3").stop().animate({opacity: 0},1000,function(){
            $(this).css({'background-image': "url('https://wallpaperaccess.com/full/1347158.jpg')"})
                       .animate({opacity: 1},{duration:1000});
         });
    }
    else if(!e){
        box.animate({backgroundColor: "#426F96", borderRadius:"5px"}, 200);
    }
}

function achieveAnim(e){
    var box = $("#tb4");
    if(e){
        box.animate({backgroundColor: "black", borderRadius:"50px"}, 400);
        $("#tb4").stop().animate({opacity: 0},1000,function(){
            $(this).css({'background-image': "url('https://wallpaperaccess.com/full/1347158.jpg')"})
                       .animate({opacity: 1},{duration:1000});
         });
    }
    else if(!e){
        box.animate({backgroundColor: "#426F96", borderRadius:"5px"}, 200);
    }
}

