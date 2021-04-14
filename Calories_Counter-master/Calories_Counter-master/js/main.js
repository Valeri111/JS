function Val(){
    var drinkValue = document.getElementById("drink").value;
   if(drinkValue !== "coffee") {
    document.getElementById('sugar').style.display = 'none';
    }
    else{document.getElementById('sugar').style.display = 'inline ';}

    if(drinkValue !== "coffee") {
        document.getElementById('cream').style.display = 'none';
    }
    else{
    document.getElementById('cream').style.display = 'inline ';}
    return drinkValue;
}

function Val2(){
    var sizeValue = document.getElementById("size").value; 
    return sizeValue;
}


function Total(){
    var total = document.getElementById("total_calories").innerText;
    return +total;
}

 function Add() {   
    let drinkValue = Val();
    let sizeValue = Val2();
    let total= Total();
    let sugarValue = document.querySelector('input[id="sugarValue"]');    
    let creamValue = document.querySelector('input[id="creamValue"]');  
    let additives;
    if (creamValue.checked && sugarValue.checked) {
        additives = 40;
    }else if(creamValue.checked || sugarValue.checked){
        additives = 20;
    }
    else{
        additives = 0;
    }
        console.log(drinkValue, sizeValue, total)
    switch(drinkValue){
        case "coffee":
            kcal =9 * sizeValue + additives;
        break;
        case "cola":
            kcal =38 * sizeValue;
        break;
        case "fanta":
            kcal =26 * sizeValue;
        break;
        case "sprite":
            kcal =33 * sizeValue;
        break;
    }
    total = total + kcal;
    document.getElementById("total_calories").innerHTML = total;
};






