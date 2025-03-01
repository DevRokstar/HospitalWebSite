"use strict";


document.getElementById("Register").addEventListener("click", function() {
    document.getElementById("Registeration").action = "s.html";
});

document.getElementById("Already Have an account").addEventListener("click", function() {
    document.getElementById("Registeration").action = "pag.html";
});
document.getElementById("showPassword").addEventListener("change", function() {
    let passwordField = document.getElementById("password");


    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});
function uppercase(){
    let input = document.getElementById("CIN");
    input.value = input.value.toUpperCase();

}
document.getElementById("job").addEventListener("keypress", function(event) {
    let char = String.fromCharCode(event.keyCode);
    let regex = /^[A-Za-z]$/; // Allow only letters

    if (!regex.test(char)) {
        event.preventDefault(); // Stop invalid characters from being typed
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";
    }
});
document.getElementById("nom","job","prenom").addEventListener("keypress", function(event) {
    let char = String.fromCharCode(event.keyCode);
    let regex = /^[A-Za-z]$/; // Allow only letters

    if (!regex.test(char)) {
        event.preventDefault(); // Stop invalid characters from being typed
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";
    }
});
document.getElementById("prenom").addEventListener("keypress", function(event) {
    let char = String.fromCharCode(event.keyCode);
    let regex = /^[A-Za-z]$/; // Allow only letters

    if (!regex.test(char)) {
        event.preventDefault(); // Stop invalid characters from being typed
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";
    }
});

document.getElementById("number").addEventListener("keypress", function(event) {
    let char = String.fromCharCode(event.keyCode);
    let regex = /^[0-9]$/; // Allow only numberssss
    let input = document.getElementById("number");
    if (!regex.test(char)) {
        event.preventDefault(); // Stop invalid characters from being typed
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "none";
    }

});
document.getElementById("CIN").addEventListener("keypress",function(event){
    let c=String.fromCharCode(event.keyCode);
    let input=this.value;
    let regexx = /^[A-Za-z]$/;
    let regex = /^[0-9]$/;
    if(input.length<2){
        if(!regexx.test(c)){

            event.preventDefault();
        } }
    else{
        if(!regex.test(c)){

            event.preventDefault();
        } }}
);
document.getElementById("date").addEventListener("keypress", function(event) {
    event.preventDefault();})
let today = new Date();
let maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
document.getElementById("date").max = maxDate.toISOString().split("T")[0];