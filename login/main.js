

let forms = document.querySelector('.valide');

forms.onsubmit = function(event) {

    let username = document.querySelector("[name='username']");
    let password = document.querySelector("[name='password']");
    let message = document.querySelectorAll(".message");


    let uservalid = false;
    let passwordvalid = false;

    if (username.value !== '') {
        uservalid = true;
        message[0].innerHTML= "is good";
        message[0].style.color='black';
        username.style=`
        border: 2px solid green;`
    }else {
        message[0].innerHTML= "is not valid";
        message[0].style.color='';
        username.style=`
        border: 2px solid red;`
    }
    if (password.value !=='' && password.value.length >=8) {
        passwordvalid = true;
        message[1].innerHTML= "is good";
        message[1].style.color='green';
        password.style=`
        border: 2px solid green;
        `
    }
    else {
        message[1].innerHTML= "is not valid";
        message[1].style.color='';
        password.style=`
        border: 2px solid red;
        `
    }
    if (uservalid == false || passwordvalid == false) {
        event.preventDefault();
    } 
}
