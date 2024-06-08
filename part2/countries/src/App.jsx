import { useEffect, useState } from 'react'
import countriesApi from './api/countriesApi'
import Country from './components/Country'

let content = 'Too many matches, specify another filter'
function App() {
  const [value, setValue] = useState("")
  const [names, setNames] = useState([])

  useEffect(()=>{
    countriesApi.getAllNames()
      .then((res)=>{
        if(value){
          let showNames = res.filter(name=> name.toUpperCase().includes(value.toUpperCase()))
          setNames(showNames)
        }
        else{
          setNames(res)
        }
      })
  }, [value])

  // handel filter
  const handelShow = (index)=>{
    setNames([names[index]])
  }
  const showCountries= ()=>{
    if(names){
      if(names.length <= 10){
        return names.map((name, index) => {
        return <div key={name}>
            <div style={{display:"inline"}}>{name}</div>
            <button onClick={()=>{handelShow(index)}}>show</button>
          </div>})
      }
      else{
        return <div>{"Too many matches, specify another filter"}</div>
      }
    }
    else{
      return null;
    }
  }

  return (
    <>
      <div>find countries <input value={value} onChange={(e)=>{setValue(e.target.value)}}/></div>
      {names.length == 1?<Country countryName={names[0]}/>:showCountries()}
      {names.length == 0 && <div>No country has this name</div>}
    </>
  )
}

export default App
