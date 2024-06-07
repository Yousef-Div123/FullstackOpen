import { Fragment } from "react"
import Person from "./Person"

const Numbers = ({persons, handelDelete}) =>{
    return (
        <>
        <h2>Numbers</h2>
        {persons.map((person)=>{
          return <div style={{display:"block"}} key={person.id}><Person person={person}/> <button id={person.id}  onClick={handelDelete}>delete</button></div>
        })}
        </>
    )
}

export default Numbers