let homeCount = 0;
let guestCount = 0;

// Point Elements displayed on the page
homePointstElement = document.querySelector(".home-points");
guestPointsElement = document.querySelector(".guest-points");

// Point buttons element Array
pointButtons = document.querySelectorAll(".add-btn");
// Add an onclick to all buttons and pass the button element to the addPoints function
pointButtons.forEach((btn) =>
    btn.addEventListener("click", () => addPoints(btn))
);
// From the passed element classes, determine what to add
function addPoints(btn) {
    let classes = btn.classList;
    let amt = 0;

    if (classes.contains("add-1")) {
        amt = 1;
    } else if (classes.contains("add-2")) {
        amt = 2;
    } else {
        amt = 3;
    }

    if (classes.contains("home")) {
        homeCount += amt;
        homePointstElement.textContent = homeCount;
    } else {
        guestCount += amt;
        guestPointsElement.textContent = guestCount;
    }
}

function newGame() {
    homeCount = 0;
    guestCount = 0;
    homePointstElement.textContent = homeCount;
    guestPointsElement.textContent = guestCount;
}
