<template>
    <div class="login_input">
        <input type="text" class="login_user" name="login_user" id="login_user" placeholder="Username"
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

<style scoped>

.login_input {
    background: rgb(255,77,109);
    background: linear-gradient(90deg, rgba(255,77,109,1) 0%, rgba(192,53,99,1) 35%, rgba(255,195,215,1) 100%);
    margin: 150px 0 200px 0;
    }

.login_user {
    width: 400px;
    height: 62px;
    margin: 40px 150px 40px 150px;
    opacity: 1;
    overflow: hidden;
    border-radius: 30px;
}

.login_sumbit {
    background-color: white;
    border-radius: 28px;
    height: 40px;
    width: 125px;
    margin-left: -100px;
    display: inline-block;
    color: #c03563;
    font-size: 16px;
    text-decoration: none;
    text-shadow: 0px 1px 0px black;
}
</style>