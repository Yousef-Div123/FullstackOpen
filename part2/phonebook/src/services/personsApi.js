import axios from "axios";

const BASE_URL = "http://localhost:3001/"

const getAll = async () =>{
    const response = await axios.get(BASE_URL + 'persons');
    return response.data;
}

const create = async (personData) =>{
    const response = await axios.post(BASE_URL + 'persons', personData);
    return response.data
}

const deletePerson = async (id) =>{
    const response = await axios.delete(`${BASE_URL}persons/${id}`)
    return response.data
}

const changePerson = async (personData) =>{
    const response = await axios.put(`${BASE_URL}persons/${personData.id}`, personData)
    return response.data
} 



export default {
    getAll,
    create,
    deletePerson,
    changePerson
}