import axios from 'axios'

const instance = axios.create({
   baseURL: 'https://react-my-burger-89bdb.firebaseio.com/'
})

export default instance;