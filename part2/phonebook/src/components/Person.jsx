const Person = ({person}) =>{
    return <div style={{display: "inline"}} key={person.id}>{person.name}: {person.number}</div>
}

export default Person