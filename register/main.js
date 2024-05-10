

let forms = document.querySelector('.valide');

forms.onsubmit = function(event) {

    let fname = document.querySelector("[name='fname']");
    let lname = document.querySelector("[name='lname']");
    let email = document.querySelector("[name='email']");
    let Address = document.querySelector("[name='Address']");
    let password = document.querySelector("[name='password']");
    let message = document.querySelectorAll(".message");


    let fnamevalid = false;
    let lnamevalid = false;
    let emailvalid = false;
    let addressvalid = false;
    let passwordvalid = false;

    if (fname.value !=='') {
        fnamevalid = true;   
        message[0].innerHTML='Valid';  
        message[0].style=`
        color: green;
        transition : .7s;`;
        fname.style=`
        border: 2px solid green;
        transition : .7s; `
    }else {
        message[0].innerHTML='is not Valid';
        message[0].style=`
        color: red;
        transition : .7s;`;
        fname.style=`
        border: 2px solid red;
        transition : .7s;`
    }
    if (lname.value !=='') {
        lnamevalid = true;
        message[1].innerHTML='Valid';  
        message[1].style=`
        color: green;
        transition : .7s;`;
        lname.style=`
        border: 2px solid green;
        transition : .7s; `
    }else {
        message[1].innerHTML='is not Valid';
        message[1].style=`
        color: red;
        transition : .7s;`;
        lname.style=`
        border: 2px solid red;
        transition : .7s;`
    }
    if (email.value !=='') {
        emailvalid = true;
        message[2].innerHTML='Valid';  
        message[2].style=`
        color: green;
        transition : .7s;`;
        email.style=`
        border: 2px solid green;
        transition : .7s; `
    }else {
        message[2].innerHTML='is not Valid';
        message[2].style=`
        color: red;
        transition : .7s;`;
        email.style=`
        border: 2px solid red;
        transition : .7s;`
    }
    if (Address.value !=='') {
        addressvalid = true;
        message[3].innerHTML='Valid';  
        message[3].style=`
        color: green;
        transition : .7s;`;
        Address.style=`
        border: 2px solid green;
        transition : .7s; `
    }else {
        message[3].innerHTML='is not Valid';
        message[3].style=`
        color: red;
        transition : .7s;`;
        Address.style=`
        border: 2px solid red;
        transition : .7s;`
    }
 
    if (password.value !=='' && password.value.length >=8 ) {
        passwordvalid = true;
        message[4].innerHTML='Valid';  
        message[4].style=`
        color: green;
        transition : .7s;`;
        password.style=`
        border: 2px solid green;
        transition : .7s; `
    }else {
        message[4].innerHTML='is not Valid';
        message[4].style=`
        color: red;
        transition : .7s;`;
        password.style=`
        border: 2px solid red;
        transition : .7s;`
    }
   


    if (fnamevalid == false || lnamevalid == false || emailvalid == false || addressvalid == false || passwordvalid == false) {
        event.preventDefault();
    }

}
