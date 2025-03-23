// add money button event handler

document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber = getInputByID('account-number');
    const accountPin = convertedInputByID('account-pin');


    // console.log(accountNumber);

    const addAmount = convertedInputByID('add-amount');

    const bankAccount = document.getElementById('bank-account').value;
    // console.log(bankAccount);

    const balance = getInputByInnerText('balance');

    // console.log(convertedBalance);

    if (accountNumber.length === 11) {
        // console.log('11 character found!');
        // if the account number is correct, now we need to check whether the password is '1111' or not
        if (bankAccount !== 'Select bank Account') {
            if (addAmount) {
                if (accountPin === 15480) {
                
                    const newBalance = balance + addAmount;
        
                    // console.log(newBalance);
        
                    document.getElementById('balance').innerText = newBalance;
        
                    alert('Money Added to your account ' + addAmount + ' Tk via ' + bankAccount);
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