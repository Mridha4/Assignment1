const body = document.querySelector("body");
const darkThemeButton = document.querySelector(".DarkThemeButton");
const aside = document.querySelector("aside");
const textarea = document.querySelector("textarea");
const newNoteButton = document.querySelector(".NewNoteButton");
const saveButton = document.querySelector(".SaveButton");
const cancelButton = document.querySelector(".CancelButton");
const asideNotes = document.querySelector(".notes");
const array_textarea = [textarea, saveButton, cancelButton];
function darkTheme()
{
    body.classList.toggle("darkBody")
    aside.classList.toggle("darkAside")
    textarea.classList.toggle("darkTextarea")
    newNoteButton.classList.toggle("DarkNewNoteSaveButton")
    darkThemeButton.classList.toggle("LightThemeButton")
    saveButton.classList.toggle("DarkNewNoteSaveButton")
    cancelButton.classList.toggle("DarkCancelButton")

    if (darkThemeButton.textContent === "Dark Theme"){
        darkThemeButton.textContent = "Light Theme"}
    else{
        darkThemeButton.textContent = "Dark Theme"}
}
darkThemeButton.addEventListener("click", darkTheme)

// Function used to hide shown things
function hide()
{
    for (element of array_textarea){
        if (!element.hasAttribute("hidden")){
        element.toggleAttribute("hidden");
        }
    }
}

// Function used to show hidden things
function show()
{
    for (element of array_textarea){
        if (element.hasAttribute("hidden")){
            element.toggleAttribute("hidden");
        }
    }
}
cancelButton.addEventListener("click", hide);
newNoteButton.addEventListener("click", show);

// Clear textarea contents
function eraseText()
{
    textarea.value = "";
}
newNoteButton.addEventListener("click", eraseText);

//notesArray
notesArray = [];
// Function gives a prompt to the user and takes the input of the prompt and adds it to the sidebar
function createNote()
{
    let text = prompt("What would you like to name this note?");
    if (text != null) {
        notesArray.push({title: text, body: textarea.value});
    }
    //creates a new list then adds it to the notes class (the entire ul)
    let list = document.createElement("li");
    let notes = document.querySelector(".notes");
    list.appendChild(document.createTextNode(text));
    notes.appendChild(list);
}
saveButton.addEventListener("click", createNote);


// Function searches for the title of the notes and pastes the body in the textarea
function savedNotes(e)
{
    for (items of notesArray){
        if (items["title"] === e.target.textContent) {
            textarea.value = items["body"];
        }
    }
}
asideNotes.addEventListener("click", savedNotes);
