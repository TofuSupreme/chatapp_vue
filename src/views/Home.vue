<template>
    <div class="main_page">
        <div class="left_panel">

        <span class="messenger_Logo">Messenger</span>
        <div class="search">
            <input type="text" class="left_panel_text_input" name="left_panel_text_input" id="left_panel_text_input" placeholder="search">
    </div>
</div>
<div class="user_header">

        <span class="userName_ID">User Name</span>
    </div>
        <div class="userMessage_div">
            <input type="text" class="userMessage_text" name="userMessage_text" id="userMessage_text" placeholder="Enter message here ...">
        </div>
    </div>
</template>

<style scoped>
    * {
    box-sizing: border-box;
}

body {
    font-size: 62.5%;
}

.main_page {
    width: 100%;
    height: 1024px;
    background: rgba(255, 255, 255, 1);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
}

.left_panel {
    width: 606px;
    height: 1024px;
    background: rgba(212, 216, 216, 0.47999998927116394);
    opacity: 1;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
}

.messenger_Logo {
    width: 184px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 74px;
    left: 226px;
    font-family: Roboto;
    font-weight: Bold;
    font-size: 28px;
    opacity: 1;
    text-align: left;
}

.left_panel_text_input {
    width: 573px;
    height: 52px;
    background: rgba(255, 255, 255, 1);
    opacity: 1;
    position: absolute;
    top: 150px;
    left: 17px;
    border-radius: 10px;
    border: none;
}

.user_header {
    width: 831px;
    height: 135px;
    background-color: white;
    position: absolute;
    top: 0px;
    left: 609px;
    overflow: hidden;
}

.userName_ID {
    width: 230px;
    color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 7px;
    left: 14px;
    font-family: Roboto;
    font-weight: Bold;
    font-size: 36px;
    opacity: 1;
    text-align: left;
}


.userMessage_div {
    width: 834px;
    height: 93px;
    background-color: white;
    position: absolute;
    top: 931px;
    left: 606px;
    overflow: hidden;
}

.userMessage_text {
    width: 696px;
    height: 62px;
    background: rgba(234, 237, 237, 0.47999998927116394);
    opacity: 1;
    position: absolute;
    top: 18px;
    left: 61px;
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