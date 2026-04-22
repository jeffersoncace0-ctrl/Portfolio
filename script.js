// WELCOME MESSAGE WHEN THE PAGE LOADS
window.onload = function () {
    alert("Welcome to my portfolio");
};

// TEXT CHANGE
const changeButton = document.getElementById("btn-cambiar");
const text = document.getElementById("texto-cambio");

let textState = 0;

// List of texts that will change
const texts = [
    "I am currently learning JavaScript and making my site interactive. I am developing skills in HTML, CSS, and JavaScript to create more dynamic and professional web pages.",

    "I am an Industrial Engineering student and a programmer in training at RIWI. I am preparing to integrate engineering knowledge with technology to improve processes and develop digital solutions.",

    "I like technology, web development, and continuing to learn every day. I enjoy creating projects that help me improve my skills as a developer.",

    "My goal is to create projects that provide value and real solutions, combining my knowledge in business, engineering, and programming."
];

// Event to change the text
if (changeButton && text) {
    changeButton.addEventListener("click", function () {
        text.textContent = texts[textState];
        textState = (textState + 1) % texts.length;
    });
}

// SHOW / HIDE CONTENT
const toggleButton = document.getElementById("btn-toggle");
const extra = document.getElementById("extra");

// Extra content
if (toggleButton && extra) {
    toggleButton.addEventListener("click", function () {
        if (extra.style.display === "none" || extra.style.display === "") {
            extra.style.display = "block";
        } else {
            extra.style.display = "none";
        }
    });
}