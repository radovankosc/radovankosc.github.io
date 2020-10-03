

for(var i = 0 ; i < 3 ; i++) {
   if(i % 2 == 0){}

   alert("You will have to click 3 times to proceed bro! Get ready for some disappearing tho!")
   console.log("I won't cheat on the exam.")
}

function greet(name){
   console.log("Hello, " + name)
}

//$("#plant-a-tree").hide();
$("#make-friends").fadeOut(500).delay(1000).fadeIn(500)

$("#closeButton").click(function (){
   $("#newsletter").slideToggle(500);
});

var cards = ["plant-a-tree","#make-friends","#money-bag"]

$(".card").hover(function (){
   $(".card").css({"width": "200px", "font-size": "150%"})
})