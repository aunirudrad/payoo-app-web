function cashoutTransaction(tk, account){
    
    const transactionBox = document.getElementById("history-box");
    const p = document.createElement("p");
    const date = new Date();

    p.classList.add("transaction-style");

    p.innerText = `Cashout ${tk} from account ${account}.
                    Time: ${date}`

    transactionBox.appendChild(p);


}
function addMoneyTransaction(tk, bankAccount){
    
    const transactionBox = document.getElementById("history-box");
    const p = document.createElement("p");
    const date = new Date();

    p.classList.add("transaction-style");

    p.innerText = `Money ${tk} added from ${bankAccount}.
                    Time: ${date}`

    transactionBox.appendChild(p);
    


}