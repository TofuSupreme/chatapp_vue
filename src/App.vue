<template>
    <div class="grid_container">
        <div class="left_panel">
            <span class="messenger_Logo">Messenger</span>

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
                <span class="userName_ID">User Name</span>
            </div>

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

            <button @click="onSubmit">Click On Me</button>
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
                    users: ['fakeUserName','self'], // Strings
                    messages: [ // Objects
                        {
                            from: 'fakeUserName',
                            text: 'Some text'
                        },
                        {
                            from: 'fakeUserName',
                            text: 'Some text'
                        },
                        {
                            from: 'self',
                            text: 'I see you got text'
                        },
                        {
                            from: 'fakeUserName',
                            text: 'Some text'
                        },
                        {
                            from: 'fakeUserName',
                            text: 'Some text'
                        },
                        {
                            from: 'fakeUserName',
                            text: 'New Text'
                        },
                    ]
                },
                '2': {
                    id: '2',
                    users: ['fakeUserName2','self'], // Strings
                    messages: [ // Objects
                        {
                            from: 'fakeUserName2',
                            text: 'Some text'
                        },
                        {
                            from: 'fakeUserName2',
                            text: 'Some text'
                        },
                        {
                            from: 'self',
                            text: 'I see you got text'
                        },
                        {
                            from: 'fakeUserName2',
                            text: 'Some text'
                        },
                        {
                            from: 'fakeUserName2',
                            text: 'Some text'
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
    background: rgba(212, 216, 216, 0.48);
    opacity: 1;
    overflow: auto;
}

.messenger_Logo {
    color: rgba(0, 0, 0, 1);
    font-family: Roboto;
    font-weight: Bold;
    font-size: 28px;
    opacity: 1;
    text-align: center;
    margin-top: 50px;
}

.right_panel {
        display: flex;
        flex-direction: column;
        background: #f1d9f1;
        opacity: 1;
        overflow: hidden;
}

.userName_ID {
    color: rgba(0, 0, 0, 1);
    font-family: Roboto;
    font-weight: Bold;
    font-size: 36px;
    margin-left: 100px;
    opacity: 1;
}

.chat_box {
    margin: 120px 0 0 200px;
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 1);
    border: 2px solid black;
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
    border: none;
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

 
</style>
