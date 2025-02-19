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
document.getElementById("nom").addEventListener("keypress", function(event) {
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