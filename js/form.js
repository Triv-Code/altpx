const comment_name = document.getElementsByName("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const form = document.querySelector('form');
let isValid = false;

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validName = () => {
    isValid = true;
    if (!comment_name.value) {
        alert("Please tell us your name.");
        isValid = false;
    }
}

// const validEmail = () => {
//     isValid = true;
//     if (!isValidEmail) {
//         alert("Please input your email.");
//         isValid = false;
//     }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validName();
    // if (isformValid = true) {
    //     form.remove();
    // }
})

// ------------------ Old Code, Just saving" 
// function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const fname = document.getElementById("fname");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");

// const form = document.querySelector('form');
// const nameInput = document.getElementsByName('name');

// let isFormValid = false;

// const f_validateInputs = () => {
//     isFormValid = true;
//     if (!nameInput.value) {
//         document.getElementById('name_error').classList.remove("hidden");
//         isFormValid = false;
//     }
// };

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     f_validateInputs();
//     // if (isformValid = true) {
//     //     form.remove();
//     // }
// })