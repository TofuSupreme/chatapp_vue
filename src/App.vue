
<template>

    <!-- <LoginComponent v-if="!loggedIn" /> -->
    <!-- <div v-else class="grid_container"> -->
        <Login v-if="!loggedIn" 
            @loginInput="loginInput"/>
        <div v-else class="grid_container"> 
            <LeftPanel :rooms="rooms" @roomSwitch="room_switch"/>
            <RightPanel :rooms="rooms" :selectedRoom="selectedRoom" 
            @onSubmit="onSubmit"/>
    <!-- <Login @loginInput="loginInput" /> -->
        <!-- @eventName="functionName" -->
    </div>
</template>

<script>
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'
import Login from './components/Login.vue'
import socket from './socket'

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
            selectedRoom: '1',
            rooms: {
                '1': {
                    id: '1',
                    users: ['UserName','self'], // Strings
                    messages: [ // Objects
                        {
                            from: 'UserName',
                            text: 'Hello there!'
                        },
                        {
                            from: 'UserName',
                            text: 'How is it going?'
                        },
                        {
                            from: 'self',
                            text: 'Hey whats up?'
                        },
                        {
                            from: 'UserName',
                            text: 'Nothing much!'
                        },
                        {
                            from: 'UserName',
                            text: 'I got some good wares!'
                        },
                        {
                            from: 'self',
                            text: 'Um.. nah, I am good'
                        },
                    ]
                },
                '2': {
                    id: '2',
                    users: ['UserName2','self'], // Strings
                    messages: [ // Objects
                        {
                            from: 'UserName2',
                            text: 'Hey there, long time no see!'
                        },
                        {
                            from: 'UserName2',
                            text: 'Do you remember me?'
                        },
                        {
                            from: 'self',
                            text: 'Oh yeah! I remember you!'
                        },
                        {
                            from: 'UserName2',
                            text: 'Its been a while but...'
                        },
                        {
                            from: 'UserName2',
                            text: 'I got some good wares!'
                        },
                    ]
                },
            },
        }
    },
    methods: {
        room_switch(newRoom) {
            this.selectedRoom = newRoom
        },
        onSubmit(input) {
            this.rooms[this.selectedRoom].messages.push({
                from: 'self',
                text: input
                })
            socket.emit('submitMessages', input)
        },
        loginInput(username) {
            this.name = username
            console.log({username})
            this.loggedIn = true;
            socket.emit('loginUser', username)
        },

        handleNewMessage(message) {
            console.log({message})
        }
    },
    created: function() {
        console.log("Starting a connection")
        socket.connect()
        socket.on('message', this.handleNewMessage)
        socket.emit('toTheServer', 'hello from the otherside')
    },
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