function compute()
{
    var principal = document.getElementById("principal").value;
var principalN = parseInt(principal);
if(principal <= 0) {alert("Enter a positive number")}

var result= document.getElementById("result");

var rate = document.getElementById("rate").value;
var rateN = parseInt(rate);

var years= document.getElementById("years").value;

var interest = principalN * years * rateN / 100;
var interestN = parseInt(interest);

var amount = interestN;

var date = new Date();
var currentYear = parseInt(date.getFullYear());
var lastYear = currentYear + parseInt(years);

result.innerHTML = "If you deposit "+principalN + ","+'<br>'+ "at an interest rate of " + rateN +"%."+'<br>' + " You will receive an amount of " + amount + "," +'<br>'+ "in the year " + lastYear + "." ;




    
}
        