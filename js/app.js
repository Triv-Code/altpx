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
    if (carouselImages[counter].id === 'firstClone') {          
        nextBtn.classList.add("btnHide");
        console.log("soup"); // --- I like soup... (Debugg)
    } else if (carouselImages[counter].id === 'lastClone') {    
        prevBtn.classList.add("btnHide");                      
        console.log("fox"); // --- Fox can be soup... (Debugg) 
    } else {
        nextBtn.classList.remove("btnHide");
        prevBtn.classList.remove("btnHide");
        console.log("panda"); // --- Pandas can be soup (Debugg)
    }
})
