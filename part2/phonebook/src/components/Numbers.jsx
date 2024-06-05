import Person from "./Person"

const Numbers = ({persons}) =>{
    return (
        <>
        <h2>Numbers</h2>
        {persons.map((person)=>{
          return <Person key={person.id} person={person}/>
        })}
        </>
    )
}

export default Numbers