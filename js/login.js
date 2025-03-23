// alert()

// button event handler

document.getElementById('btn-login').addEventListener('click', function(event){
    // console.log('btn clicked');
    event.preventDefault(); // prevent the whole function not to set in default or reload the page

    const accountNumber = getInputByID('account-number');
    const accountPin = convertedInputByID('account-pin');


    // console.log(accountNumber, accountPin);
    // first we need to check, the account number digit is equal to 11 digit
    if (accountNumber.length === 11) {
        // console.log('11 character found!');
        // if the account number is correct, now we need to check whether the password is '1111' or not
        if (accountPin === 1111) {
            // console.log('Login Successful!');
            window.location.href = './main.html';
        }
        else{
            alert('wrong password!');
        }
    }
    else{
        alert('not a valid account number');
    }
    
})




