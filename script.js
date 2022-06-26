const messageElement = document.getElementById("messages");
const userChat = document.getElementById("form");
const userText = document.getElementById("text")
userChat.addEventListener("click", findChat)

// initialize comfyjs with the value of the text user entered in form
function findChat(event) {
    event.preventDefault()
    console.log(userText.value)
    let userInput = userText.value
    ComfyJS.Init(userInput);

}
// create empty messsages array to store messages that will be populated on page
const messages = [];
console.log(messages)
// when the dom loads, listen for a chat using comfy
document.addEventListener("DOMContentLoaded", () => {
    ComfyJS.onChat = (user, message, flags, self, extra) => {
        console.log(user)
        // when a user chats, execute update chat and pass it the message
        updateChat(`${user}:  ${message}`)

    }

    // ComfyJS.Init("ianm93__");


})

const updateChat = (x) => {
    // push x (the messsage passed to this function where it is called) into empty messages array
    messages.push(x)
    console.log(messages)
    // if the messages array is greater than 15, remove the first index (0) of the array and remove the first <li> from the dom
    if (messages.length > 15) {
        messages.shift();
        const toDelete = messageElement.firstChild
        messageElement.removeChild(toDelete)

    }
    // create a list element 
    const list = document.createElement("li")
    // make the text of said element equal to the message that is passed into the function
    list.innerText = x;
    // append that element (which now has the hchat messages populated) to the messages (<ul>) element
    messageElement.appendChild(list)

}


