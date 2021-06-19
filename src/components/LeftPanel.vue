<template>
    <div class="left_panel">
        <div class="meseenger_header">
            <div class="messenger_logo">
                <font-awesome-icon icon="user-circle" class="profile_icon" />
                <span messenger_logo_text> Chat </span>
                <font-awesome-icon icon="comment-alt" class="other_icon" />
                <font-awesome-icon icon="bell" class="other_icon"/>
            </div>
        </div>
<!-- ="{room, isSelf: room.from == 'self'}"-->
        <ul class="room_list">
            <li class="room"
                :class="{ 'user': room.users}"
                @click="$emit('roomSwitch', room.id)"
                v-for="room in rooms"
                :key="room.id">
                {{ room.users[0] }}
                {{ room.messages[room.messages.length - 1].text }} 
                <!-- With a given array, it grabs the last value of that array -->
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LeftPanel',
    props: {
        rooms: Object
    }
}
</script>

<style> 
.left_panel {
    display: flex;
    flex-direction: column;
    opacity: 1;
    overflow: auto;
}
.meseenger_header {
    background:#ff758f;
    padding: 40px;
}
.messenger_logo {
    color: rgba(0, 0, 0, 1);
    font-family: Roboto;
    font-weight: Bold;
    font-size: 28px;
    opacity: 1;

}
.profile_icon {
    padding-right: 10px;
    margin-right: 50px;
}
.other_icon {
    padding-right:10px;
}
.room_list {
    font-size: 18px;
    list-style: none;
}

.room_list:hover {
    cursor: pointer;
}
.room {
    padding: 20px;
    margin-bottom: 15px;
    list-style: none;
}

.room:hover {
    background-color: #fff0f3;
}

.user {
    color: black;
    margin-right: 40px;
    padding-top: 10px;
    border-radius: 20px;
    border: 2px solid #c03563;
}
</style>