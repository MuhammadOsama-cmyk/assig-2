// 1. Declare 3 variables in one statement
let var1 = "Variable 1", var2 = "Variable 2", var3 = "Variable 3";
console.log(var1, var2,var3)

// 2. Declare legal and illegal variable names
let legalVariableNames = ["myVar", "$dollarSign", "_underscore", "camelCase", "var123"];
let illegalVariableNames = ["123start", "my-var", "alert", "let", "#hash"];
console.log(legalVariableNames, illegalVariableNames)

// 3. Display rules in the browser

         const heading = document.createElement("h1");
 heading.textContent = "Rules for naming JS variables";
 document.body.appendChild(heading);

 document.write("</br></br>Variable names can only contain . number. $ and _ . For example : $my_1stVariable")
 document.write("</br>Variables must begin with a letter, $ or _ . For example $name, _name or name")
 document.write("</br>Variable names are case sensetive")
 document.write("Variable names should not be JS keywords")

//      CHAPTER : NO : 5

//     QUESTION : NO : 1

 const a = "3";
 //const b = "5";
 
 //heading.textContent = "Sum of 3 and 5 is " + (parseInt(a) + parseInt(b));
 document.body.appendChild(heading);

 


      //    QUESTION : NO : 2
// const a = "3";
 const b = "5";
 console.log(a * b);
 console.log(a - b);
 console.log(a / b);
 console.log(a % b);


 const Multiplication = document.createElement("h1");
 Multiplication.textContent = "Sum of 3 and 5 is " + (parseInt(a) * parseInt(b));
 document.body.appendChild(Multiplication);

 const subtract = document.createElement("h1");
 subtract.textContent = "Sum of 3 and 5 is " + (parseInt(a) - parseInt(b));
 document.body.appendChild(subtract);

 const division = document.createElement("h1");
 division.textContent = "Sum of 3 and 5 is " + (parseInt(a) / parseInt(b));
 document.body.appendChild(division);

 const Modulus = document.createElement("h1");
 Modulus.textContent = "Sum of 3 and 5 is " + (parseInt(a) % parseInt(b));
 document.body.appendChild(Modulus);  

 //   QUESTION : NO : 3

 //var a;
 const partb = document.createElement("h3");
 partb.textContent = ("Value after variable after declaration is " + a);
 document.body.appendChild(partb);

// a = 5;
 const partc = document.createElement("h3");
 partc.textContent = ("Initial value:" + a);
 document.body.appendChild(partc);

 //var b = 1;
 const partd = document.createElement("h3");
 partd.textContent = "Value after increment is:" + (parseInt(a) + parseInt(b));
 document.body.appendChild(partd);

 var c = 7;
 const parthe = document.createElement("h3");
 parthe.textContent = "Value after addition is:" + (parseInt(a) + parseInt(b) + parseInt(c));
 document.body.appendChild(parthe);

 var d = 1;
 const parti = document.createElement("h3");
 parti.textContent = "Value after decrement is:" + (parseInt(a) + parseInt(b) + parseInt(c) - parseInt(d));
 document.body.appendChild(parti);

 const dividend = (parseInt(a) + parseInt(b) + parseInt(c) - parseInt(d));;
 const divisor = 3;
 const remainder = dividend % divisor; 

 //const heading = document.createElement('h1');
 document.body.appendChild(heading);

 //     QUESTION : NO :4


  const ticketPrice = 600;
  const numberOfTickets = 5;
  const totalCost = ticketPrice * numberOfTickets;

  console.log(totalCost);

  const ticket = document.createElement('h3');
 ticket.textContent = "Total cost of 5 tickets to a movie is " + totalCost;
 document.body.appendChild(ticket);

 //     QUESTION: NO : 6

 //const c = prompt("Enter celcius Value"),
  f = ((c * 9 / 5)  + 32).toFixed(2);
 console.log(f);
  const celcius = document.createElement('h1');
//  celcius.textContent = "The temperature in fahrenheit is: " + f;
  document.body.appendChild(celcius);

 function celciusToFahrenheit (celcius){
          fahrenheit = ((celcius * 9 / 5) + 32)
         return fahrenheit;
 }
 function fahrenheitToCelcius (fahrenheit){
      //   celcius = ((fahrenheit - 32) * 5 / 9)
        return celcius;
        }
document.write ("30 celcius is " + celciusToFahrenheit(30) + " f");
 document.write ("</br>86 fahrenheit is " + fahrenheitToCelcius(70) + "C" );

 document.write(celciusToFahrenheit(30))
 document.write(fahrenheitToCelcius(86))

 //  QUESTION : NO : 7

 //const heading = document.createElement('h1');
 heading.textContent = "Shopping Cart";
 document.body.appendChild(heading);

 var item1 = "650" ;
// var quantityitem1 = 3 ;
 var item2 = "100" ;
 var quantityitem2 = 7 ;
 var shipping = 100 ;
// const total = (item1 * quantityitem1) + (item2 * quantityitem2) ;
 //const totalCost = total + shipping ;

 console.log(totalCost);

 document.write("</br></br></br> Price of item 1 is  " + item1)
 //document.write("</br> Quantity of item 1 is  " + quantityitem1)
document.write("</br>Price of item 2 is  " + item2)
document.write("</br> Quantity of item 2 is  " + quantityitem2)
 document.write("</br>Shipping Charges " + shipping)
 document.write("</br></br>Total cost of your order is  " + totalCost)


 //   QUESTION: NO : 8

// const heading = document.createElement('h1');
 heading.textContent = "Marks Sheet";
 document.body.appendChild(heading);

 let totalmarks = "1100";
 let marksobtained = "942";
 let percentage = ((marksobtained / totalmarks) * 100);
 console.log(percentage);

 document.write("</br></br></br>Total marks:" + totalmarks);
 document.write("</br>Marks obtained:" + marksobtained);
 document.write("</br>Percentage" + percentage + "%");


//     QUESTION: NO : 9

 const dollar = "15.6";
 const PKR = "278.36";
 const dollartopkr = dollar * PKR;
 const pkrtodollar = PKR / dollar;
 console.log(dollartopkr);

 document.write("</br></br></br>Total Currency in PKR:" + dollartopkr);

//   QUESTION: NO : 10

// const a = 10;
 //const b = 10;
// const d = 5;
 //const c = 2;
 document.write((((parseInt(a)   + parseInt(d)) * b) / c));
 console.log((((parseInt(a)   + parseInt(d)) * b) / c));


 // QUESTION: NO : 11


 let currentYear = 2024;  
 let birthYear = 2006;    

 let age1 = currentYear - birthYear; 
 let age2 = age1 - 1;                

 //document.write(They are either ${age1} or ${age2} years old.)
// console.log(They are either ${age1} or ${age2} years old.);


