const writing = document.querySelector(".writingOnPage");
window.addEventListener('keypress', textHandler);

let text = "";

function textHandler (e) {
    let filteredKeyValue = e.key.match("[- A-Za-z0-9`¬\\\\!?/*=,./|\[£\\]%^&()'\"${}]");
    if (e.key === "Enter") {
        // Go to next line
    } else if (filteredKeyValue) {
    text += filteredKeyValue;
    writing.innerHTML = text;
    };
};
