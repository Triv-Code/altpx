const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 0;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners
            // ??? --- Can I add Arrow Keys < / > to the EventListener? --- ??? 
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
            // ??? --- Can I add Arrow Keys < / > to the EventListener --- ??? 
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
            // ??? --- Auto transitioning on Clone imgs when it should hold. Needs Debugged --- ???
// carouselSlide.addEventListener('transitionend', () => {
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transition = "none";
//         // counter = carouselImages.length - 2; // Debugg
//         console.log("lastClone" + counter);
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if (carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = "none";
//         counter = carouselImages.length - counter;
//         // console.log("firstClone" + counter); // Debugg
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }

// });