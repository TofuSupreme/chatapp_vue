
<template>

    <!-- <LoginComponent v-if="!loggedIn" /> -->
    <!-- <div v-else class="grid_container"> -->
    <Login v-if="!loggedIn" 
        @loginInput="loginInput"/>
        
    <div v-else class="grid_container"> 
        <LeftPanel :rooms="rooms" @roomSwitch="room_switch"/>
        <RightPanel 
            :rooms="rooms" 
            :selectedRoom="selectedRoom" 
            :username="username"
            @onSubmit="onSubmit" 
            
        />
    <!-- <Login @loginInput="loginInput" /> -->
        <!-- @eventName="functionName" -->
    </div>
</template>

<script>
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import Login from './components/Login.vue'
import socket from './socket'
import axios from 'axios'


export default {
    name: 'App',
    components: {
        LeftPanel, 
        RightPanel,
        Login,
    },
    data() {
        return {
            loggedIn: false,
            //login-username state -- should be an empty string when it first starts out.
            //when the user logs in, it will be populated with that username.
            username: '',
            selectedRoom: '1',
            rooms: {}
        }
    }, 
    methods: {
        setRooms(rooms){
            console.log({rooms})
            this.rooms = rooms;
        },
        room_switch(newRoom) {
            this.selectedRoom = newRoom
        },
        onSubmit(input) {
            this.rooms[this.selectedRoom].messages.push({
                from: 'TofuSupreme',
                text: input
            })
            socket.emit('submitMessages', input)
        },
        loginInput(username) {
            this.username = username
            console.log({username})
            this.loggedIn = true;
            socket.emit('loginUser', username)
            socket.auth = {username}
            socket.connect()
            console.log("Starting a connection")
        },
        handleNewMessage(message) {
            console.log({message})
        },
    },
    created: function() {
        socket.on('message', this.handleNewMessage)
        socket.emit('toTheServer', 'hello from the otherside')
        socket.on('userRooms', this.setRooms)
    },
    mounted: async function(){
        try {
            this.username = await axios.get('http://localhost:3000/users').then(res => res.data)
            this.error = null
        } catch (error){
            this.username = null
            this.error = error
        }
        try {
            this.messages = await axios.get('http://localhost:3000/messages').then(res => res.data)
            this.error = null
        } catch (error) {
            this.messages = null
            this.error = error
        }
        try {
            this.rooms = await axios.get('http://localhost:3000/rooms').then(res => res.data)
            this.error = null
        } catch (error) {
            this.rooms = null
            this.error = error
        }
    }

    }
</script>

<style>

body {
    font-size: 62.5%;
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
}

.grid_container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 100vh;
}

</style>