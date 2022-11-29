//When the “Dark Theme” button is clicked, the background colors of the sidebar and the container of the textarea and the buttons should change to darker colors, and the text on the button should be updated to “Light Theme”. Pressing the “Light Theme” button would reverse all the changes. (3 points)
//Hint: Think about how you can do this by toggling a class property
const body = document.querySelector("body")
const darkThemeButton = document.querySelector(".b2")
const aside = document.querySelector("aside")
function darkTheme()
{
    body.classList.toggle("darkBody")
    aside.classList.toggle("darkAside")
}
darkThemeButton.addEventListener("click", darkTheme)

