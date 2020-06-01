document.addEventListener("DOMContentLoaded", sidenErLoadet);

function sidenErLoadet() {
    burgermenu();
}

// BURGERMENU

function burgermenu() {

    document.querySelector(".burgermenu").addEventListener("mouseover", burgerFarveskiftOver);

    document.querySelector(".burgermenu").addEventListener("mouseout", burgerFarveskiftOut)

    document.querySelector(".burgermenu").addEventListener("click", toggleBurgermenu);

    document.querySelector("#hovedmenu").addEventListener("click", toggleBurgermenu);

    function burgerFarveskiftOver() {
        //         document.querySelector(".bar1").classList.add("farveskift_bar");
        //         document.querySelector(".bar2").classList.add("farveskift_bar");
        //         document.querySelector(".bar3").classList.add("farveskift_bar");
    }

    function burgerFarveskiftOut() {
        //         document.querySelector(".bar1").classList.remove("farveskift_bar");
        //         document.querySelector(".bar2").classList.remove("farveskift_bar");
        //         document.querySelector(".bar3").classList.remove("farveskift_bar");
    }

    function toggleBurgermenu() {
        document.querySelector(".burgermenu").classList.toggle("change");
        document.querySelector(".burgermenu").classList.toggle("skrump");
        document.querySelector("#hovedmenu").classList.toggle("show");
        document.querySelector("#hovedmenu_logo").style.visibility = "visible";   
    }
}

var portrait = window.matchMedia("(max-width: 768px) and (orientation: portrait)")
var landscape = window.matchMedia("(max-width: 1024px) and (orientation: landscape)")


hover_mobil_tablet_portrait_landscape(portrait, landscape) // Call listener function at run time

portrait.addListener(hover_mobil_tablet_portrait_landscape) // Attach listener function on state changes

landscape.addListener(hover_mobil_tablet_portrait_landscape)

function hover_mobil_tablet_portrait_landscape(portrait, landscape) {
    if (portrait.matches) { // If media query matches
       console.log("mobil"); document.querySelector(".kompetence_beskrivelse").addEventListener("click").style.opacity = "1";
    }

    else if (landscape.matches) {
       console.log("ipad"); document.querySelector(".kompetence_beskrivelse").addEventListener("click").style.opacity = "1";

    } else {

    }
}
