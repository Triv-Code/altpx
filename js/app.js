// --- Selectors for Images
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// --- Selectors for Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// --- Counter & Size (How many pixels to skip forward.)
let counter = 0;
const size = carouselImages[0].clientWidth;

// --- Next / Previous Picture Movement
function nextPicture(){
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function prevPicture(){
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

// --- Event Listeners for Next / Previous Picture Movement
nextBtn.addEventListener('click', nextPicture);
prevBtn.addEventListener('click', prevPicture);

// --- Arrow Keys for Next / Previous Picture Movement
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            prevPicture();
            break;
        case 39:
            nextPicture();
            break;
    }
};


// --- Hiding Button when on last image
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'firstClone') {          // --- Change ID if not using Loop Feature
        nextBtn.classList.add("btnHide");
        console.log("soup"); // --- I like soup... (Debugg)
    } else if (carouselImages[counter].id === 'lastClone') {    
        prevBtn.classList.add("btnHide");                       // --- Change ID if not using Loop Feature
        console.log("fox"); // --- Fox can be soup... (Debugg) 
    } else {
        nextBtn.classList.remove("btnHide");
        prevBtn.classList.remove("btnHide");
        console.log("panda"); // --- Pandas can be soup (Debugg)
    }
})

// ??? --- Auto transitioning on Clone imgs when it should hold. Needs Debugged --- ???
// carouselSlide.addEventListener('transitionend', () => {
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - 2; // Debugg
//         console.log("lastClone" + counter);
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
    // if (carouselImages[counter].id === 'firstClone') {
    //     carouselSlide.style.transition = "none";
    //     counter = carouselImages.length - counter;
    //     console.log("firstClone" + counter); // Debugg
    //     carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    // }
// })