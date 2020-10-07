let color = ("purple");
let number = 10;
let word = "cool";

if (color === ("purple")){

   
   $('#northID').css("background-color","purple")
}

console.log(color)

if (number > 100) {
   $('#eastID').text("whoah, that's a big number.")
}else{
   $('#eastID').text("just a regular number, please.")
}

if (word = 'cool') {
   $('#southID').text("Power of DOM")
}else{
   $('#westID').text("Power of DOM")
}
