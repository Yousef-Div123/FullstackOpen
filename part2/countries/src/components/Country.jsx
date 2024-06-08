import { useEffect, useState } from "react"
import countriesApi from "../api/countriesApi"

const Country = ({countryName})=>{
    const [country, setCountry] = useState()

    useEffect(()=>{
        countriesApi.getCountery(countryName)
            .then((res)=>{
                setCountry(res)
            })
    }, [])

    if(!country){
        return null;
    }

    return (
    <div>
        <h2>{country.name.common}</h2>
        <div>capital {country.capital[0]}</div>
        <div>area {country.area}</div>
        <h3>languages</h3>
        <ul>
            {Object.values(country.languages).map(lan => {
                return <li key={lan}>{lan}</li>
            })}
        </ul>
        <img src={country.flags.png}/>
    </div>
    )
}

export default Country