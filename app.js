const messageElement = document.getElementById("messages");


const messages = [];
console.log(messages)
document.addEventListener("DOMContentLoaded", () =>{
    ComfyJS.onChat = (user, message, flags, self, extra) => {
        updateChat(`${user}-${message}`)
        
    }
    
    
    ComfyJS.Init("ianm93__");
    
    
})

const updateChat = (x) => {
    
    messages.push(x)
    console.log(messages)
    if (messages.length >10){
        messages.unshift();
        const toDelete = messageElement.lastChild
        messageElement.removeChild(toDelete)

    }
    const list = document.createElement("li")
    list.innerText = x;
    messageElement.appendChild(list)

}