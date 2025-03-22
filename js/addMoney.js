// add money button event handler

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const accountPin = document.getElementById('account-pin').value;
    const convertedPin = parseInt(accountPin);

    const addAmount = document.getElementById('add-amount').value;

    const convertedAmount = parseFloat(addAmount);
    // console.log(addAmount);
    const bankAccount = document.getElementById('bank-account').value;
    // console.log(bankAccount);

    const balance = document.getElementById('balance').innerText;
    const convertedBalance = parseFloat(balance);

    // console.log(convertedBalance);

    if (accountNumber.length === 11) {
        // console.log('11 character found!');
        // if the account number is correct, now we need to check whether the password is '1111' or not
        if (bankAccount !== 'Select bank Account') {
            if (convertedAmount) {
                if (convertedPin === 15480) {
                
                    const newBalance = convertedBalance + convertedAmount;
        
                    // console.log(newBalance);
        
                    document.getElementById('balance').innerText = newBalance;
        
                    alert('Money Added to your account ' + convertedAmount + ' Tk via ' + bankAccount);
                }
                else{
                    alert('wrong password!');
                }
            }
            else{
                alert('Please enter Amount');
            }
        }
        else{
            alert('Please select a valid Bank Account!');
        }
    }
    else{
        alert('not a valid account number');
    }
})