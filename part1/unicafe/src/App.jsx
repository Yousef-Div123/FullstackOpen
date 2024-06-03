import { useState } from 'react'
import Button from './Button'
import Statistics from './stat/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button value={good} text={"good"} setValue={setGood}/>
      <Button value={neutral} text={"neutral"} setValue={setNeutral}/>
      <Button value={bad} text={"bad"} setValue={setBad}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}

export default App
