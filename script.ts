// script.ts

function validateName1() {
    var nameInput = document.getElementById('name');

    // Trim the input value to remove leading and trailing spaces
    var name = (nameInput as HTMLInputElement).value.trim();

    if (name === 'John Doe') {
        nameInput!.classList.add('valid');
    } else {
        nameInput!.classList.remove('valid');
    }
}


function validateCredit() {
    var CreditInput = document.getElementById('Credit');

    // Trim the input value to remove leading and trailing spaces
    var Credit = (CreditInput as HTMLInputElement).value.replace(/\s/g, ''); // Remove spaces from the input


    

    if (Credit.trim() === '') {
        CreditInput!.classList.remove('valid');
        CreditInput!.classList.remove('invalid');
    } else if (/[^0-9]/.test(Credit) || Credit.length !== 16) {
        CreditInput!.classList.remove('valid');
        CreditInput!.classList.add('invalid');
    } else {
        CreditInput!.classList.remove('invalid');
        CreditInput!.classList.add('valid');
    }
}

function validateEmail() {
    var emailInput = document.getElementById('Email');
    var email = (emailInput as HTMLInputElement).value.trim();

    if (email.trim() === '') {
        emailInput!.classList.remove('valid');
        emailInput!.classList.remove('invalid');
    } else {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            emailInput!.classList.remove('invalid');
            emailInput!.classList.add('valid');
        } else {
            emailInput!.classList.remove('valid');
            emailInput!.classList.add('invalid');
        }
    }
}

    // Trim the input value to remove leading and trailing spaces
    function validateForename() {
        var forenameInput = document.getElementById('forename');
        var forename = (forenameInput as HTMLInputElement).value.trim();
    
        // Check for potential SQL injection commands
        var potentialSQLCommands = ["'", "IF", "OR", "AND", "IN"];
        for (var i = 0; i < potentialSQLCommands.length; i++) {
            if (forename.includes(potentialSQLCommands[i])) {
                alert('Potential SQL injection detected in forename input');
                return;
            }
        }

    if (forename === '') {
        forenameInput!.classList.remove('valid');
        forenameInput!.classList.remove('invalid');
    } else {
        var nameRegex = /^[a-zA-Z]+$/;
        if (nameRegex.test(forename)) {
            forenameInput!.classList.remove('invalid');
            forenameInput!.classList.add('valid');
        } else {
            forenameInput!.classList.remove('valid');
            forenameInput!.classList.add('invalid');
        }
    }
}

function validateSurname() {
    var surnameInput = document.getElementById('surname');
    var surname = (surnameInput as HTMLInputElement).value.trim();

    // Check for potential SQL injection commands
    var potentialSQLCommands = ["'", "IF", "OR", "AND", "IN"];
    for (var i = 0; i < potentialSQLCommands.length; i++) {
        if (surname.indexOf(potentialSQLCommands[i]) !== -1) {
            // Potential SQL command found
            alert('Potential SQL injection detected in surname input');
            return;
        }
    }


    if (surname === '') {
        surnameInput!.classList.remove('valid');
        surnameInput!.classList.remove('invalid');
    } else {
        var nameRegex = /^[a-zA-Z]+$/;
        if (nameRegex.test(surname)) {
            surnameInput!.classList.remove('invalid');
            surnameInput!.classList.add('valid');
        } else {
            surnameInput!.classList.remove('valid');
            surnameInput!.classList.add('invalid');
        }
    }
}