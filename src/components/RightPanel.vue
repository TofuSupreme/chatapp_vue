<template>
    <div class="right_panel">
        <div class="user_header">
            <span class="userName_ID">
                <font-awesome-icon icon="user"/>
                User Name
            </span>
        </div>

        <div class="messenger_body">
            <ul class="chat_box">
                <li 
                    class="chat_box_messages"
                    :class="{'selftext': message.from == 'self', 
                            'othertext': message.from == 'UserName'}"
                    v-for="(message, index) in rooms[selectedRoom].messages" 
                    :key="index">
                    {{ message.from }}: {{ message.text }}
                </li>
            </ul>

            <input 
                type="text" 
                class="user_text_input" 
                name="user_text_input" 
                id="user_text_input" 
                placeholder="Enter message here ..."
                v-model="input"
            />
            <button @click="handleClick" class="messenger_button">
                Send
            </button> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'RightPanel',
    props: {
        rooms: Object,
        selectedRoom: String,
    },
    data(){
        return {
            input: ''
        }
    },
    methods: {
        handleClick(input) { 
            this.$emit('onSubmit', this.input)
            this.input = '' 
            console.log(input)
        }
    }
}
</script>

<style>
.right_panel {
        display: flex;
        flex-direction: column;
        opacity: 1;
        overflow: scroll;
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
    background-color: white;
    height: 450px;
    width: 500px;
    font-size: 16px;
    margin: 50px 0 0 100px;
    padding-bottom: 30px;
    padding-top: 15px;
}

.chat_box_messages {
    list-style: none;
    text-align: left;
    margin-top:15px;
}
.user_text_input {
    width: 400px;
    height: 62px;
    margin: 40px 150px 40px 150px;
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
    margin-left: -100px;
    display: inline-block;
    cursor: pointer;
    color: #c03563;
    font-size: 16px;
    text-decoration: none;
    text-shadow: 0px 1px 0px black;
}
.selftext {
    background-color: #ffc3d7;
    border-radius: 20px;
    margin-right: 15px;
    padding: 10px;
}

.othertext {
    background-color: #c03563;
    border-radius: 20px;
    margin-right: 15px;
    padding: 10px;
}

</style>