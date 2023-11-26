import axios from "axios";

const baseurl ='http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseurl)
    return request.then(response => response.data)
}

const deletePersonById = (id) => {
    const request = axios.delete(`${baseurl}/${id}`)
    return request.then(response => response.data)
}

const addNewPerson = (person) => {
    const request = axios.post(baseurl, person)
    return request.then(response => response.data)
}

const updateNumber = (person) => {
    //console.log(`we should update ${person}`)
    const request = axios.put(`${baseurl}/${person.id}`, person)
    return request.then(response => response.data)
}


export default {
    getAll,
    addNewPerson,
    deletePersonById,
    updateNumber
}