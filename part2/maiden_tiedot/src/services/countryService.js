import axios from 'axios'

const baseurl = 'https://studies.cs.helsinki.fi/restcountries/api'

const hello = () => {
    console.log('hello')
}

const getAll = () => {
    const request = axios.get(`${baseurl}/all`)
    return request.then(r => r.data)
}

export default {
    hello,
    getAll
}