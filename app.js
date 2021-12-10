var initialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#Current-price");
var browseBtn = document.querySelector("#btn");
var outputDiv = document.querySelector("#output");


browseBtn.addEventListener("click", calculateProfitAddLoss)

function calculateProfitAddLoss() {
    
    
    if (Number(initialPrice.value) <Number(currentPrice.value)){
        var profit=(initialPrice.value-currentPrice.value)*quantity.value;
        var profitPercentage=(profit/initialPrice.value)*100;
        outputDiv.innerText=(`The profit is ${profit} and profit percentage is ${profitPercentage}%`)
        
    }else if (Number(initialPrice.value) >Number(currentPrice.value)){
        var loss=(currentPrice.value-initialPrice.value)*quantity.value;
        var lossPercentage=(loss/initialPrice.value)*100;
        outputDiv.innerText=(`The loss is ${loss} and loss percentage is ${lossPercentage}%`)
        
    }else{
        outputDiv.innerText=("No pain no gain ")
    }

}