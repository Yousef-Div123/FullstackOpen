import axios from 'axios'

const BASE_URL = "https://studies.cs.helsinki.fi/restcountries/api/"

const getAllNames = async () =>{
    let response = await axios.get(BASE_URL+"all")
    let names = response.data.map(countery => countery.name.common)
    return names;
}

const getCountery = async (countery) =>{
    let response = await axios.get(BASE_URL+"name/"+countery)
    return response.data
}


export default {
    getAllNames,
    getCountery
}