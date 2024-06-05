const PersonForm = ({handelSubmit, newName, setNewName, newNum, setNewNum}) => {
    return(
      <>
      <h2>Add new</h2>
      <form onSubmit={handelSubmit}>
        <div>
          name: <input value={newName} onChange={e => setNewName(e.target.value)}/>
        </div>
        <div>
          number: <input value={newNum} onChange={e => setNewNum(e.target.value)}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
    )
}

export default PersonForm