
<template>
    <div class="grid_container">
        <LeftPanel :rooms="rooms" @roomSwitch="room_switch"/>
        <RightPanel :rooms="rooms" :selectedRoom="selectedRoom" 
            @onSubmit="onSubmit"/>

        <!-- @eventName="functionName" -->
    </div>
</template>

<script>
import LeftPanel from './components/LeftPanel.vue'
import RightPanel from './components/RightPanel.vue'

export default {
    name: 'App',
    components: {
        LeftPanel, 
        RightPanel,
    },
    data() {
        return {
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