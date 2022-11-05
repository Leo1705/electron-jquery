

$(function() {
    $("#button").dxButton({
        text: "Click me!",
        onClick(){ 
             api.ipcRenderer.send("maintorender","hello from render process");
             console.log("Hello from the main");
            

        }

    });
});