const SMALL_PIZZA = 6.95;
const MEDIUM_PIZZA = 9.45;
const LARGE_PIZZA = 11.45;

var amountSmallPizza =  prompt("Hoeveel SMALL PIZZA wilt u?");
var amountMediumPizza =  prompt("Hoeveel MEDIUM PIZZA wilt u?");
var amountLargePizza =  prompt("Hoeveel LARGE PIZZA wilt u?");

var prijsTotaalSmallPizza = amountSmallPizza*SMALL_PIZZA
var prijsTotaalMediumPizza = amountMediumPizza*MEDIUM_PIZZA
var prijsTotaalLargePizza = amountLargePizza*LARGE_PIZZA

var totaal = prijsTotaalSmallPizza+prijsTotaalMediumPizza+prijsTotaalLargePizza;

var receiptBuilder = amountSmallPizza + " Pizza Small €"+ prijsTotaalSmallPizza.toFixed(2) + "<br>" ;
receiptBuilder = receiptBuilder + amountMediumPizza + " Pizza Medium €"+ prijsTotaalMediumPizza.toFixed(2)+ "<br>";
receiptBuilder = receiptBuilder + amountLargePizza + " Pizza Medium €"+ prijsTotaalLargePizza.toFixed(2)+ "<br>";
receiptBuilder = receiptBuilder + "---------------+"+ "<br>";
receiptBuilder = receiptBuilder + "Totaal €" + totaal.toFixed(2);

document.getElementById("receipt").innerHTML =  receiptBuilder;