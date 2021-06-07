
<template>
    <div class="grid_container">
        <div class="left_panel">
            <div class="meseenger_header">
            <span class="messenger_logo">
            <font-awesome-icon icon="user-circle" class="profile_icon"/>
                    Chat
                    </span>
                    </div>
                
            <!-- Display the rooms list -->
            <ul class="room_list">
                <li class="room"
                    @click="room_switch(room.id)"
                    v-for="room in rooms"
                    :key="room.id">
                    {{ room.users[0] }}
                    {{ room.messages[room.messages.length - 1].text }} 
                    <!-- With a given array, it grabs the last value of that array -->
                </li>
            </ul>
        </div>

        <div class="right_panel">
            <div class="user_header">
                <span class="userName_ID">
                    <font-awesome-icon icon="user"/>
                    User Name</span>
            </div>
            <div class="messenger_body">
            <ul class="chat_box">
                <li 
                    class="chat_box_messages"
                    v-for="(message, index) in rooms[selectedRoom].messages" 
                    :key="index">
                    {{ message.from }}: {{ message.text }}
                </li>
            </ul>

            <input 
                type="text" 
                class="userMessage_text" 
                name="userMessage_text" 
                id="userMessage_text" 
                placeholder="Enter message here ..."
                v-model="input"
            />
            <button @click="onSubmit" class="messenger_button">Send</button> 
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    components: {

    },
    
    data() {
        return {
            input: "",
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
        onSubmit() {
            this.rooms[this.selectedRoom].messages.push({
                from: 'self',
                text: this.input
            })
            this.input = ""
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

.left_panel {
    display: flex;
    flex-direction: column;
    opacity: 1;
    overflow: auto;
}

.meseenger_header {
    background:#ffc3d7;
    padding: 40px;
}
.messenger_logo {
    color: rgba(0, 0, 0, 1);
    font-family: Roboto;
    font-weight: Bold;
    font-size: 28px;
    opacity: 1;
    padding: 40px;

}

.profile_icon {
    padding-right: 10px;
    margin-right: 50px;
}

.room_list {
padding-top: 30px;
}

.room_list:hover {
    cursor: pointer;
}
.room {
    padding: 20px;
    list-style: none;
    font-size: 14px;
    font-style: italic;
}

.right_panel {
        display: flex;
        flex-direction: column;
        opacity: 1;
        overflow: hidden;
        background-color: #c03563;
        
}

.user_header {
    padding: 35px;
    background-color: #c03563
}
.userName_ID {
    color: rgba(0, 0, 0, 1);
    font-family: Roboto;
    font-weight: Bold;
    font-size: 36px;
    margin-left: 100px;
    opacity: 1;
}
.messenger_body {
    background:#ffc3d7;
}
.chat_box {
    margin: 50px 0 0 200px;
    width: 225px;
    height: 250px;
    padding-bottom: 30px;
    padding-top: 15px;
    background-color: white;
}

.chat_box_messages {
    list-style: none;
    text-align: left;
    margin-top:15px;
}

.userMessage_text {
    width: 400px;
    height: 62px;
    margin: 100px;
    opacity: 1;
    overflow: hidden;
    border-radius: 30px;
}

input[type="text"] {
    padding-left: 15px;
    font-size: 16px;
}

input[type="text"]:focus {
    outline: none;
    -webkit-box-shadow: 1px 2px 9px 1px #000000;
    box-shadow: 1px 2px 9px 1px #000000;

}

.messenger_button {
    background-color: white;
    border-radius: 28px;
    height: 40px;
    width: 125px;
    margin-left: -50px;
    display: inline-block;
    cursor: pointer;
    color: #c03563;
    font-size: 16px;
    text-decoration: none;
    text-shadow: 0px 1px 0px black;
}
</style>
