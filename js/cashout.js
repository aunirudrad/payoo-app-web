document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    
    const agentNumber = document.getElementById('agent-number').value;
    const cashoutPin = document.getElementById('cashout-pin').value;

    const convertedCashoutPin = parseInt(cashoutPin);

    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);

    const balance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(balance);
    
    console.log(typeof balance);

    if (agentNumber.length === 11) {
        // console.log('11 character found!');
        // if the account number is correct, now we need to check whether the password is '1111' or not
        if (convertedCashoutAmount) {
            if (convertedCashoutPin === 15480) {
                // console.log('Login Successful!');
                const newBalance = convertedBalance - convertedCashoutAmount;
                document.getElementById('balance').innerText = newBalance;

                alert('cashout ' + convertedCashoutAmount + ' successful and new Balance is ' + newBalance);
            }
            else{
                alert('wrong password!');
            }
        }
        else{
            alert('Please enter amount');
        }
    }
    else{
        alert('not a valid account number');
    }
    
})