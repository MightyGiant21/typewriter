const writing = document.querySelector(".writingOnPage");
window.addEventListener('keypress', textHandler);

let textArray = [];

function textHandler (e) {
    let filteredKeyValue = e.key.match("[- A-Za-z0-9!?/*,./|£%^&()'\"${}]");
    if (e.key === "Enter") {
        // Go to next line
    } else {
    textArray.push(filteredKeyValue);
    let updatedArray = textArray.join('');
    writing.innerHTML = updatedArray;
    };
};
