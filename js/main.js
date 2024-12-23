

// Footer

    const currentYear = new Date().getFullYear();
    const d = new Date();
    const yearElement = document.getElementById("footerYear").textContent = currentYear;
    console.log(d);



//Portfolio Greeting
window.onload = function() {
    const currentTime = new Date().getHours(); 
    const greetingElement = document.getElementById("greeting");

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
console.log(greetingMessage);

    greetingElement.textContent = greetingMessage;
    greetingElement.className = greetingStyle;
};


// Alert & Hover Button
const btn = document.getElementById("btn-alert");
btn.addEventListener("click", function () {
    alert("Why can't you hear a pterodactyl going to the bathroom? Because the P is silent.");
    console.log('clicked');
}); btn.addEventListener("mouseenter", function () {
    btn.textContent = "If... you... DARE!";
}); btn.addEventListener("mouseleave", function () {
    btn.textContent = "Click here to smile";
});

// for Loops
window.onload = function () {
const ol = document.getElementById("numbers");
for (let i = 1; i <= 12; i++) {
    const li = document.createElement("li");
    if (i % 2 === 0) {
        li.textContent = `Even`;
    } else {
        li.textContent = `Odd`;
    }
    ol.appendChild(li);
}
}
console.log('Hello, Mr. Peasley!');
   