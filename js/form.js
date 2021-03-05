// const comment_name = document.getElementsByName("name");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");
// const form = document.querySelector('form');
// let isValid = false;

// function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


// const validName = () => {
//     if (!comment_name.value) {
//         alert("Please tell us your name.");
//     } else {
//         console.log("work?");
//     }
// }

// const validEmail = () => {
//     isValid = true;
//     if (!isValidEmail) {
//         alert("Please input your email.");
//         isValid = false;
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validName();
//     if (isformValid = true) {
//         form.remove();
//     }
// })

// ------------------ Old Code, Just saving" 
// function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const name = document.getElementById("name");
// const lname = document.getElementById("lname");
// const email = document.getElementById("email");
// const subject = document.getElementById("subject");

// const form = document.querySelector('form');
// const nameInput = document.getElementsByName('name');

// let isFormValid = false;

// const validateInputs = () => {
//     isFormValid = true;
//     if (!nameInput.value) {
//         document.getElementById('name_error').classList.remove("hidden");
//         isFormValid = false;
//     }
// };

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateInputs();
//     // if (isformValid = true) {
//     //     form.remove();
//     // }
// })

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const message = document.getElementById('subject');
const error_msg = document.getElementsByClassName('error_hint');

const validateInputs = () => {
    // isFormValid = true;
    if (!error_msg.value) {
        document.getElementById('name_error').classList.remove("hidden");
        // isFormValid = false;
    }
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
})


// Instead of trying to add/remove a class, why not set
// display to none and then use javascript to change it
// if the validation is false?