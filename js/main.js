

// Footer
window.onload = function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("footerYear").textContent = currentYear;
};



//Portfolio Greeting
window.onload = function() {
    const greetingElement = document.getElementById("greeting");
    const currentTime = new Date().getHours(); 

    let greetingMessage = "";
    let greetingStyle = "";


    if (currentTime >= 5 && currentTime < 12) {
        greetingMessage = "Morning sunshine!";
        greetingStyle = "morning"; 
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingMessage = "Afternoon my friend!";
        greetingStyle = "afternoon"; 
    } else {
        greetingMessage = "Evening!";
        greetingStyle = "evening"; 
    }


    greetingElement.textContent = greetingMessage;
    greetingElement.className = greetingStyle;
};


// Alert Button
const button = document.getElementById("btn-alert");
button.addEventListener("click", function() {
    alert("Why can't you hear a pterodactyl going to the bathroom? Because the P is silent.");
});
// Hover Button
// for Loops
