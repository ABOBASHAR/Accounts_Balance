window.onload = function() {
    // Get all elements with the class "balance"
    var balances = document.getElementsByClassName("bal");
    // Loop through each balance cell
    for (var i = 0; i < balances.length; i++) {
        // Get the numeric part of the balance (remove the "$" symbol)
        var balance = parseFloat(balances[i].innerText.replace('$', ''));
        // If balance is 10 or more, change background color to green
        if (balance >= 20) {
            balances[i].style.backgroundColor = "lightgreen";
        }
        else if (balance >= 10) {
            balances[i].style.backgroundColor = "green";
        }
        else if(balance >3) {
        balances[i].style.backgroundColor = "yellow";
    }
    else
    balances[i].style.backgroundColor = "red";
    }
    //**********************************************************************
    //********************************************************************** 
    //********************************************************************** 
    //********************************************************************** 
    //********************************************************************** 
    //********************************************************************** 
    var Br_balances= document.getElementsByClassName("br");
    for(var i = 0; i < Br_balances.length;i++) {
        var Br_balance = parseFloat(Br_balances[i].innerText.replace('£', ''));
        if(Br_balance>1){
            Br_balances[i].style.backgroundColor = "green";
        }
        else 
        Br_balances[i].style.backgroundColor = "red";
    }
    //**********************************************************************
    //********************************************************************** 
    //********************************************************************** 
    //********************************************************************** 
    //********************************************************************** 
    //********************************************************************** 


    
    // var Kr_balances= document.getElementsByClassName("Kr");
    // for(var i = 0; i < Kr_balances.length;i++) {
    //     var Kr_balance = parseFloat(Br_balances[i].innerText.replace('₩', ''));
    //     if(Kr_balance=="4000₩"){
    //         Kr_balances[i].style.backgroundColor = "green";
    //     }
    //     else if(Kr_balance==5290){
    //     Kr_balances[i].style.backgroundColor = "red";
    // }
    // }
}
