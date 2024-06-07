import { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import personsApi from './services/personsApi'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter] = useState('')

  // loading persons
  useEffect(()=>{
    personsApi.getAll()
      .then((persons)=>{
        setPersons(persons)
      })
  },[])

  // filtering logic
  let showPersons;
  if(filter){
    showPersons = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
  }
  else{
    showPersons = persons
  }

  const handelSubmit = (e)=>{
    e.preventDefault()
    let person = persons.find(person=> person.name === newName)
    if(!person){
      let newPerson = {name: newName, number:newNum}
      personsApi.create(newPerson)
        .then((newPersonData)=>{
          setPersons([
            ...persons,
            newPersonData
          ])
          setNewName("")
          setNewNum("")
        })
    }
    else{
      if(confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)){
        let newPerson = {...person, number: newNum}
        personsApi.changePerson(newPerson)
          .then((res)=>{
            setPersons(persons.map(person =>{
              if(person.id === res.id){
                return res
              }
              else
                return person
            }))
            setNewName("")
            setNewNum("")
          })
      }
    }

  }

  const handelDelete = (e)=>{
    let id = e.target.id
    let person = persons.find(person => person.id === id)
    if(window.confirm("Delete " + person.name + " ?")){
      personsApi.deletePerson(id)
        .then((deletedPerson) =>{
          let newPersons = persons.filter(person => person.id !== id)
          setPersons(newPersons)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <PersonForm handelSubmit={handelSubmit} newName={newName} setNewName={setNewName} newNum={newNum} setNewNum={setNewNum}/>
      <Numbers persons={showPersons} handelDelete={handelDelete}/>
    </div>
  )
}

export default App