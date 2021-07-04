import axios from 'axios'

export default {
    async getRooms(){
        let res = await axios.get('http://localhost:3000/rooms')
        return res.data
    }, 
    async getMessages(){
        let res = await axios.get('http://localhost:3000/messages')
        return res.data
    },
    async getUsers(){
        let res = await axios.get('http://localhost:3000/users')
        return res.data
    }
}