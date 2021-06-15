<template>
    <div class="login_input">
    <input type="text" name="login_user" id="login_user" placeholder="Username"
    v-model="username">
    <button @click="handleClicked"
        class="login_sumbit"> Submit
        </button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
            username: ''
        }
    },
    methods: {
        handleClicked(username) {
            this.$emit('loginInput', this.username)
            this.username = ''
            console.log(`button from login has been clicked ${username}`)
        }
    }
}
</script>