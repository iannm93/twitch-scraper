

document.addEventListener("DOMContentLoaded", () =>{
    ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
        console.log(flags.broadcaster)
    
        if(flags.broadcaster && command === "test" ) {
          console.log("response")
        }
      }
      ComfyJS.Init("ianm93__");

    
})

