document.getElementById('add-money').addEventListener('click',function(){
    handleToggle("add-money-form", "block");
    handleToggle("cashout-form", "none");
    handleToggle("transaction-history", "none");
    
    document.getElementById('add-money').style.borderColor = "blue";
    document.getElementById('add-money').style.color = "blue";
    document.getElementById('add-money').style.fontWeight = "bold";
    document.getElementById('cashout').style.borderColor = "none";
    document.getElementById('cashout').style.color = "none";
    document.getElementById('cashout').style.fontWeight = "none";
})
document.getElementById('cashout').addEventListener('click',function(){
    
    handleToggle("add-money-form", "none");
    handleToggle("cashout-form", "block");
    handleToggle("transaction-history", "none");
    
    
})

document.getElementById('transaction-box').addEventListener('click',function(){
    
    handleToggle("transaction-history", "block");
    handleToggle("add-money-form", "none");
    handleToggle("cashout-form", "none");


})