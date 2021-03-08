// --- Selectors 
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const message = document.getElementById('subject');
const errorMsg = document.getElementById('error');      // Tried having 1 ID to cut down on the code
const errorMsg2 = document.getElementById('error2');    // But it only ever grabbed the 1st ID. 
const errorMsg3 = document.getElementById('error3');    // I think it's fine, because of individual Validation
const errorMsg4 = document.getElementById('error4');    // Email being different than name for example

// --- Shows / Hides Error text (removes/adds hidden class)
function fnameValid() {                        
    if (!fname.value) {
        errorMsg.classList.remove("hidden");
        console.log("yoda"); // --- Yoda is cool... (Debugg)
    } else if(fname.value) {
        errorMsg.classList.add("hidden");
    }
}

function lnameValid() {
    if (!lname.value) {
        errorMsg2.classList.remove("hidden");
        console.log("luke");
    } else if (lname.value) {
        errorMsg2.classList.add("hidden");
    }
}

function emailValid() {
    if (!email.value) {
        errorMsg3.classList.remove("hidden");
        console.log("Windu");
    } else if(email.value) {
        errorMsg3.classList.add("hidden");
    }
}

function messageValid() {
    if (!message.value) {
        errorMsg4.classList.remove("hidden");
        console.log("Quin-Gon");
    } else if(message.value) {
        errorMsg4.classList.add("hidden");
    }
}

// --- Thank you alert and clears error messages
function thanks() {
    if (fname.value && lname.value && email.value && message.value) {
        errorMsg.classList.add("hidden");
        errorMsg2.classList.add("hidden");
        errorMsg3.classList.add("hidden");
        errorMsg4.classList.add("hidden");
        alert("Thank you for your message! We'll get back to you soon.");
        form.reset();
    }
}

// --- Submit Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    fnameValid();
    lnameValid();
    emailValid();
    messageValid();
    thanks();
})
