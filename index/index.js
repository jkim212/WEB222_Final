
const menu = document.getElementById("menu");
const landingButton = document.getElementById("about");
const playButton = document.getElementById("play");
const reviewsButton = document.getElementById("reviews");
const infoButton = document.getElementById("info");
const display = document.getElementById("content");
const title = document.getElementById("title");

//When title is clicked, set iframe link to landing.html
title.addEventListener("click", function() {
    display.innerHTML = "";
    const disp = document.createElement("iframe");
    disp.className = "show";
    disp.src = "landing/landing.html";
    disp.style.height = "3300px";
    display.appendChild(disp);
});

//When about menu is clicked, set iframe link to info.html
landingButton.addEventListener("click", function() {
    display.innerHTML = "";
    const disp = document.createElement("iframe");
    disp.className = "show";
    disp.src = "land_play/info.html";
    disp.style.height = "1600px";
    display.appendChild(disp);
});

//Receive message from child element and set iframe to corresponding html
window.addEventListener('message', function(event) {
    if (event.data === 'load-about') {
        display.innerHTML = "";
        const disp = document.createElement("iframe");
        disp.className = "show";
        disp.src = "land_play/info.html";
        disp.style.height = "1600px";
        display.appendChild(disp);
        document.documentElement.scrollTop = 0; 
    }
    if (event.data === 'load-game') {
        display.innerHTML = "";
        const disp = document.createElement("iframe");
        disp.style.height = "70vh";
        disp.style.minHeight = "600px";
        disp.className = "show";
        disp.src = "land_play/play.html";
        display.appendChild(disp);
        document.documentElement.scrollTop = 0; 
    }
  });

//When play menu is clicked, set iframe link to play.html
playButton.addEventListener("click", function() {
    display.innerHTML = "";
    const disp = document.createElement("iframe");
    disp.style.height = "70vh";
    disp.style.minHeight = "600px";
    disp.className = "show";
    disp.src = "land_play/play.html";
    display.appendChild(disp);

});

//When reviews menu is clicked, set iframe link to reviews.html
reviewsButton.addEventListener("click", function() {
    display.innerHTML = "";
    const disp = document.createElement("iframe");
    disp.className = "show";
    disp.style.height = "230vh";
    disp.style.minHeight = "600px";
    disp.src = "reviews/reviews.html";
    display.appendChild(disp);

});

//When author menu is clicked, set iframe link to about.html
infoButton.addEventListener("click", function() {
    display.innerHTML = "";
    const disp = document.createElement("iframe");
    disp.className = "show";
    disp.style.height = "2300px";
    disp.style.minHeight = "600px";
    disp.src = "about-author/about.html";
    display.appendChild(disp);

});

