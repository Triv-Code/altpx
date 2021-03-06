// --- Selectors 
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const message = document.getElementById('subject');
const errorMsg = document.getElementById('error');

// --- Shows Error Text (Removes "hidden" class)
function validateInputs() {
    if (!fname.value) {
        fname.style.display('block');
        console.log("yoda"); // --- Yoda is cool...
    }
}

// --- Submit Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
})
