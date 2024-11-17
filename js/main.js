

// Footer

    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("footerYear").textContent = currentYear;



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


// Alert & Hover Button
const btn = document.getElementById("btn-alert");
btn.addEventListener("click", function () {
    alert("Why can't you hear a pterodactyl going to the bathroom? Because the P is silent.");
}); btn.addEventListener("mouseenter", function () {
    btn.textContent = "If... you... DARE!";
}); btn.addEventListener("mouseleave", function () {
    btn.textContent = "Click here to smile";
});


// for Loops
const ol = document.getElementById("numbers");

// Use a for loop to create 12 <li> elements
for (let i = 1; i <= 12; i++) {
    // Create a new <li> element
    const li = document.createElement("li");

    // Set the text content based on whether the index is even or odd
    if (i % 2 === 0) {
        li.textContent = `Sleep`;
    } else {
        li.textContent = `Work`;
    }

    // Append the <li> element to the ordered list
    ol.appendChild(li);
}

   