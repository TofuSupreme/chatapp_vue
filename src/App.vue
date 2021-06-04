<template>
    <div class="grid_container">
        <div class="left_panel">
            <span class="messenger_Logo">Messenger</span>
                <div class="room_notification">
                    <p>Person A has entered the room</p>
                    <p>Person B has entered the room</p>
                    <p>Person C has left the room</p>
                </div>
                <input type="text" class="left_panel_text_input" name="left_panel_text_input" id="left_panel_text_input" placeholder="search">
        </div>
    <div class="right_panel">
            <div class="user_header">
                <span class="userName_ID">User Name</span>
            </div>
            <ul class="chat_box">
                <li class="chat_box_messages"
                    v-for="(message, index) in messages" :key="index">
                    {{ message }}
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
            messages: []
        }
    },
    methods: {
        onSubmit() {
            this.messages.push(this.input)
            this.input = ""
        }
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
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    height: 1024px;
}

.left_panel {
    display: flex;
    flex-direction: column;
    background: rgba(212, 216, 216, 0.48);
    opacity: 1;
    overflow: hidden;
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

.room_notification {
    margin: 100px 0 0 200px;
    width: 250px;
    height: 250px;
    background: rgba(255, 255, 255, 1);
    border: 2px solid black;
}
.left_panel_text_input {
    margin: 100px 0 0 100px;
    width: 400px;
    height: 52px;
    background: rgba(255, 255, 255, 1);
    opacity: 1;
    border-radius: 10px;
    border: none;
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
