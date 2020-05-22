const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const server = app.listen(port, () => console.log(`Listening on port: ${port}`) );
const io = require("socket.io")(server);
app.use(cors())
    

io.on("connection", socket => {
// socket.on("event_from_client",data => {
// socket.broadcast.emit("send_data_to_all_other_clients", data);
// });
console.log("Nice to meet you.(shake hand)");
socket.emit("welcome to my Socket IO");
});