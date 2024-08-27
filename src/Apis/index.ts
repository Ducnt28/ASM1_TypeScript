import axios from 'axios'

const instace = axios.create({
  baseURL: 'http://localhost:kaka',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default instace