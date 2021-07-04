const express = require('express')
const { Server } = require('ws')
const app = express()
const rooms = require('./db')

const port = 3000
const http = app.listen(port,()=> {
    console.log(`Tuning in on http://localhost:${port}`)
})

const mongoose = require('mongoose')
const uri = "mongodb+srv://atlasDB:p455w0rd@cluster0.lqjcz.mongodb.net/firstMongo?retryWrites=true&w=majority";
const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//the room
const roomSchema = new mongoose.Schema({
    id: String,
    users: [String]
}) 

const roomModel = mongoose.model('rooms', roomSchema)

const messagesSchema = new mongoose.Schema({
    roomId: String,
    from: String,
    text: String
}, { timestamps: true })

//messages inside the room
const messagesModel = mongoose.model('messages', messagesSchema)

//create the users schema 

const userSchema = new mongoose.Schema({
    username: String,
})

const userModel = mongoose.model('usernames', userSchema)
//TODO: Retrieve bulk data from API and the real time chat will be through websockets 
//TODO: Make the front-end work again

app.get('/rooms', async (req, res) => {
    let rooms
    try {
        rooms = await roomModel.find({}).exec()
    } catch (err) {
        console.error(err)
    }
    res.send(rooms)
    console.log(rooms)

    // return the json 
})

//create an API call for users 
app.get('/users', async(req, res) => {
    let users
    try {
        users = await userModel.find({}).exec()
        
    } catch (err) {
        console.error(err)
    }
    res.send(users)
    console.log(users)
})

//LOOK AT THIS FOR AN EXAMPLE.
app.get('/messages', async (req, res) => {
    let messages
    try {
        messages = await messagesModel.find({}).exec()
    } catch (err) {
        console.error(err)
    }
    res.send(messages)
    console.log(messages)

    // return the json
})

const io = require('socket.io')
(http, {
    cors: { origin: "*"}
})

// Creates a namespace for our chat app.
// The namespace allows us to keep all websocket traffic limited to this
//  specific route versus taking the root namespace, aka '/'.
const chat = io.of('/chat')

// Chat Middlewares
chat.use((socket, next) => {
    console.log('hit middleware')

    // Gets username from auth
    const username = socket.handshake.auth.username

    console.log({ username })

    // Errors if no username listed
    // if (!username) {
    //     return next(new Error("invalid username"))
    // }

    // Stores auth permanently in the client socket
    socket.username = username

    // Moves on to the next handler
    next()
})

chat.on('connection', (socket) => {
    console.log('a user has connected')
})

