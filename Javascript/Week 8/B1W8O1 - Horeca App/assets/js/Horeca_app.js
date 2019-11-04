var order = prompt("Wat wilt u bestellen. U kunt kiezen tussen \n 1.Fris \n 2.Bier \n 3.Wijn \n 4.Snack of \n 5.Stop");
var fris = 0;
var bier = 0;
var wijn = 0;
var bitterballen8 =  0;
var bitterballen16 = 0;

const PRIJSFRIS = 2.00;
const PRIJSBIER = 4.00;
const PRIJSWIJN = 5.00;
const PRIJSBITTERBALLEN8 = 7.00;
const PRIJSBITTERBALLEN16 = 12.00;

var receipt = document.getElementById("receipt");

function takeOrder(){

    if(order === "Fris"){
        fris += Number(prompt("Hoeveel "+order+" wil je?"));
    }else if(order === "Bier"){
        bier += Number(prompt("Hoeveel "+order+" wil je?"));
    }else if(order === "Wijn") {
        wijn += Number(prompt("Hoeveel "+order+" wil je?"));
    }else if(order === "Snack"){
        var snack = prompt ("Hoeveel bitterballen wilt u toevoegen (8 of 16)?");
        if (snack === "8"){
            bitterballen8 += Number(prompt("Hoeveel bitterbalschalen van 8 wilt u bestellen?"));
        }else if (snack === "16"){
            bitterballen8 += Number(prompt("Hoeveel bitterbalschalen van 16 wilt u bestellen?"));

        } else{
            alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
        }
    }
        else if(order === "Stop"){
        calculateOrder();
        return false;
    }

    order = prompt("Wat wilt u bestellen. U kunt kiezen tussen \n 1.Fris \n 2.Bier \n 3.Wijn \n 4.Snack of \n 5.Stop");
    takeOrder();
}

function calculateOrder(){

    var totalFris = PRIJSFRIS * fris;
    var totalBier = PRIJSBIER * bier;
    var totalWijn = PRIJSWIJN * wijn;
    var totalBitterBallen8 = PRIJSBITTERBALLEN8 * bitterballen8;
    var totalBitterBallen16 = PRIJSBITTERBALLEN16 * bitterballen16;
    var subTotal = totalFris + totalBier + totalWijn + totalBitterBallen8 + totalBitterBallen16;
    makeReceipt(totalFris,totalBier,totalWijn, totalBitterBallen8, totalBitterBallen16, subTotal)
}

function makeReceipt(totaalFris,totaalBier,totaalWijn, totalBitterBallen8, totalBitterBallen16, subTotal){
    var receiptBuilder = "";
    receiptBuilder += "aantal frisdrank "+ fris+" totaalprijs frisdrank € " + totaalFris+"<br>";
    receiptBuilder += "aantal bier " + bier +" totaalprijs Bier € " + totaalBier+"<br>";
    receiptBuilder += "aantal wijn " + wijn +" totaalprijs wijn € " + totaalWijn+"<br>";
    receiptBuilder += "aantal bitterballen(8) " + bitterballen8 +" totaalprijs bitterballen(8) € " + totalBitterBallen8 +"<br>";
    receiptBuilder += "aantal bitterballen(16) " + bitterballen16 +" totaalprijs bitterballen(16) € " + totalBitterBallen16 +"<br>";
    
    receiptBuilder += "_________________ + " +"<br>";
    receiptBuilder += "subtotal: € " + subTotal;

    receipt.innerHTML = receiptBuilder;


}
takeOrder();