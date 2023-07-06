const express = require("express");
const socket = require("socket.io");
const path = require("path");
// App setup
const PORT = 5000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
//app.use(express.static("public"));

// Socket setup

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})


const io = socket(server);

io.on('connection', (socket) => {
    console.log('A user connected');
    ide = socket.id;
  
    socket.on('chat message', (msg) => {
        ide = socket.id;
      console.log('Message from_ '+ide+' :'+ msg);
      io.emit('chat message',ide, msg);
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  