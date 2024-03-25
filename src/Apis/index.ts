import axios from 'axios'

const instace = axios.create({
  baseURL: 'http://localhost:2000',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instace