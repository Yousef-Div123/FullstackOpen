import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(()=>{
    axios.get('http://localhost:3001/persons')
      .then((response)=>{
        setPersons(response.data)
      })
  },[])

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