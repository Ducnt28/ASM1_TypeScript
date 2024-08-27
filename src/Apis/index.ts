import axios from 'axios'

const instace = axios.create({
  baseURL: 'http://localhost:2000234234234',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instace