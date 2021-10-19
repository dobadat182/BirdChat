var socket = io('http://localhost:3000');

// Server send data back
socket.on("Server-send-data", function(data){
    $('#noidung').append(data + ", ")
})

// Waiting for html finish and then run JS  
$(document).ready(function() {

    $('.send').click(function(){
        socket.emit("Client-send-data", "HELLO BITCH")
    })

})