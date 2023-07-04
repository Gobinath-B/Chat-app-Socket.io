const express = require("express");
const socket = require("socket.io");

// App setup
const PORT = 5000;
const app = express();
const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log('A user connected');
  
    socket.on('chat message', (msg) => {
      console.log('Message: ' + msg);
      io.emit('chat message', msg);
    });
  
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
  