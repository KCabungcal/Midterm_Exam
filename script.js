
function greetUser() {
    let fname = prompt("What's your name?");
    if (fname) {
        alert(`Hello, ${fname}! Welcome to our website.`);
    } else {
        alert("Hello! Welcome to our website.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    let greetButton = document.getElementById("greetButton");
    if (greetButton) {
        greetButton.addEventListener("click", greetUser);
    }
});
