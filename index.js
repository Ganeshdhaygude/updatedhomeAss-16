const textarea = document.getElementById("textarea");

function saveToLocalStorage() {
    localStorage.setItem("savedtext", textarea.value);
}

// Load text from local storage when the page loads
if (localStorage.getItem("savedtext")) {
    textarea.value = localStorage.getItem("savedtext");
}

textarea.addEventListener("input", saveToLocalStorage);


//console.log(localStorage.getItem("savedtext"));
