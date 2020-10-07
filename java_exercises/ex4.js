let myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a / 7);
}



let bookCount = 20;

for (let i = 1; i <= bookCount; i++) {
  if (i % 2 === 0){
   console.log(i)
  }   
}


//FUNCTION THAT PRINTS OUT A NUMBER SEQUENCE
 let printNumbersTill = (howMany) => {
   for (let i = 1; i <= howMany; i++) {
       console.log(i)
           
    }
 };

 printNumbersTill(4);


//FUNCTION THAT GREETS THE PARAMETER PERSON

let getGreetingTo = (visitor) => {          
 console.log("Hello " + visitor + "!"); 
}

 getGreetingTo("Trontos");



//ARRAYS

let printValues = (array) => {
   array.forEach((number) => {
     console.log(number);
   })
 };

 printValues([1,12,23,4,05,16])


