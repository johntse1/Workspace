const express = require('express')
var cors = require('cors')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require ('./config/db')
const port = process.env.PORT || 3000


//connectDB()
const app = express()
app.use(cors())
app.use(cors({origin: '*'}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/jobs',require('./routes/jobRoutes'),cors())
app.use('/api/users',require('./routes/userRoutes'),cors())

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
console.log('please work cors')


//creates the server with socket.io
const {Server} = require("socket.io")
const http = require("http");

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        //which url is calling/called
        origin: "http://localhost:3000",
        methods:["GET","POST"],
    },
});
//server generation

//checks if someone is connected to the server
io.on("connection",(socket)=>{
    //logs socketid
    console.log(`User connected:${socket.id}`);

    //joins the room to data
    socket.on("join_room",(data)=>{
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    })

    //send message log
    socket.on("send_message",(data)=>{
        socket.to(data.room).emit("receive_message",data);
    });

    //disconnect
    socket.on("disconnect",()=>{
        console.log("User Disconnected",socket.id);
    });
});

server.listen(3001, ()=>{
    console.log("SERVER RUNNING");
});
