document.getElementById('add-money').addEventListener('click',function(){
    document.getElementById('add-money-form').style.display = "block";
    document.getElementById('cashout-form').style.display = "none";
})
document.getElementById('cashout').addEventListener('click',function(){
    document.getElementById('cashout-form').style.display = "block";
    document.getElementById('add-money-form').style.display = "none";
})