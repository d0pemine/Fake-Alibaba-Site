var email = document.getElementById('email')
var password = document.getElementById('password')
var passwordlagi = document.getElementById('passwordlagi')
var emailcomment = document.getElementById('emailcomment')
var pass1comment = document.getElementById('pass1comment')
var pass2comment = document.getElementById('pass2comment')

var checkbox = document.getElementById('checkbox')
var benar = true
var button = document.getElementById('button')

email.addEventListener('focusout',email_f)
password.addEventListener('focusout',password_f)
passwordlagi.addEventListener('focusout',passwordlagi_f)
checkbox.addEventListener('click',checkbox_f)

function email_f(){
    if(email.value == ''){
        emailcomment.innerHTML = 'Please enter your email.'
        email.style.borderColor = 'red'
    }
    else{
        emailcomment.innerHTML = ''
        email.style.borderColor = '#d6d8d7'
    }
}

function password_f(){
    if(password.value == ''){
        pass1comment.innerHTML = 'Please enter your password.'
        password.style.borderColor = 'red'
    }
    else{
        pass1comment.innerHTML = ''
        password.style.borderColor = '#d6d8d7'
    }
}
function passwordlagi_f(){
    if(passwordlagi.value == ''){
        pass2comment.innerHTML = 'Please enter your password.'
        passwordlagi.style.borderColor = 'red'
    }
    else{
        pass2comment.innerHTML = ''
        passwordlagi.style.borderColor = '#d6d8d7'
    }
}

function checkbox_f(){
    if(benar == true){
        button.style.backgroundColor = '#fe6a00'
        benar = false
    }
    else{
        button.style.backgroundColor = '#d5d5d5'
        benar = true
    }
}