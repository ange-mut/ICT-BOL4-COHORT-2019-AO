const pizzaS = 4.25;
const pizzaM = 5.00;
const pizzaL = 7.50;

var amountPizzaSmall = prompt("Hoeveel small pizza's wilt u? €4,50"); // Type your anwers
document.write(amountPizzaSmall+" Pizza small prijs: €" +(amountPizzaSmall*pizzaS).toFixed(2)+ '<br/>'); // Shows the tekst

var amountPizzaMedium = prompt("Hoeveel medium pizza's wilt u? €5,50"); // Second prompt simillar to first one
document.write(amountPizzaMedium+" Pizza medium prijs: €" +(amountPizzaMedium*pizzaM).toFixed(2)+ '<br/>');

var amountPizzaLarge = prompt("Hoeveel large pizza's wilt u? €6,50"); // Third prompt simillar to the first one
document.write(amountPizzaLarge+" Pizza large prijs: €" +(amountPizzaLarge*pizzaL).toFixed(2)+ '<br><br>')

var Total = amountPizzaSmall*pizzaS+amountPizzaMedium*pizzaM+amountPizzaLarge*pizzaL; // Total amount money
document.write ("Totaal bedrag: €"+Total.toFixed(2));
