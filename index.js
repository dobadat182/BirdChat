// LIBRARIES =====================
// Express JS
var express = require("express")
var app = express()
app.use(express.static("public"))
// EJS 
app.set("view engine", "ejs")
app.set("views", "./views")
// Server 
var server = require("http").Server(app)
// Socket io
var io = require("socket.io")(server)



// From the server side listening to the connection | on
io.on("connection", function(socket){
    console.log(socket.id+' Đã kết nối👻')

    // Listen event disconnect
    socket.on('disconnect', function() {
        console.log(socket.id + " ngắt kết nối 🚗")
    })

    socket.on("Client-send-data", function(data) {
        console.log(socket.id + " vừa gửi: " + data)
        // Sever send data back to all client
        io.sockets.emit("Server-send-data", data)
    })
    
    console.log('Số người đang truy cập là:' + io.engine.clientsCount);
})



// Route 
app.get('/', function(req, res) {
    res.render("home")
})

// Server run on port 3000
server.listen(3000)
