const messageElement = document.getElementById("messages");
const userChat = document.getElementById("form");
const userText = document.getElementById("text")
userChat.addEventListener("click", findChat)

function findChat(event){
    event.preventDefault()
    ComfyJS.Init(userText.value);
    
}

const messages = [];
console.log(messages)
document.addEventListener("DOMContentLoaded", () =>{
    ComfyJS.onChat = (user, message, flags, self, extra) => {
        updateChat(`${user}-${message}`)
        
    }
    
    
    // ComfyJS.Init("ianm93__");
    
    
})

const updateChat = (x) => {
    
    messages.push(x)
    console.log(messages)
    if (messages.length >10){
        messages.shift();
        const toDelete = messageElement.firstChild
        messageElement.removeChild(toDelete)

    }
    const list = document.createElement("li")
    list.innerText = x;
    messageElement.appendChild(list)

}