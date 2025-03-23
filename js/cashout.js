document.getElementById('cashout-btn').addEventListener('click', function(event){
    event.preventDefault();

    
    const agentNumber = getInputByID('agent-number');
    const cashoutPin = convertedInputByID('cashout-pin');


    const cashoutAmount = convertedInputByID('cashout-amount');

    const balance = getInputByInnerText('balance');

    
    // console.log(typeof balance);

    if (agentNumber.length === 11) {
        // console.log('11 character found!');
        // if the account number is correct, now we need to check whether the password is '1111' or not
        if (cashoutAmount) {
            if (cashoutPin === 15480) {
                // console.log('Login Successful!');
                const newBalance = balance - cashoutAmount;
                document.getElementById('balance').innerText = newBalance;

                alert('cashout ' + cashoutAmount + ' successful and new Balance is ' + newBalance);
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