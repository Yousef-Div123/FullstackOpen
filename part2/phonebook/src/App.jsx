import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  let showPersons;
  if(filter){
    showPersons = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
  }
  else{
    showPersons = persons
  }
  const handelSubmit = (e)=>{
    e.preventDefault()
    let exist = persons.find(person=> person.name === newName)
    if(!exist){
      let newPerson = {name: newName, number:newNum}
      setPersons([
        ...persons,
        newPerson
      ])
      setNewName("")
      setNewNum("")
    }
    else
      alert(`${newName} is already added to phonebook`)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <PersonForm handelSubmit={handelSubmit} newName={newName} setNewName={setNewName} newNum={newNum} setNewNum={setNewNum}/>
      <Numbers persons={showPersons}/>
    </div>
  )
}

export default App