const path=require('path');
const http=require('http');
const express= require('express');
const socketio=require('socket.io');
const app=express();
const server=http.createServer(app);
const io=socketio(server);
const port=process.env.PORT || 3000;
const PublicDirectoryPath=path.join(__dirname,'../public');
app.use(express.static(PublicDirectoryPath));
app.listen();
io.on('connection',()=>{
    console.log('New websocket new nwe connection');
})
server.listen(port,()=>{
    console.log(`server is up on port ${port}!`);
})