const Total = ({parts}) =>{
    const total = parts.reduce((total, curr)=>{
        let exercises = curr.exercises
        total += exercises
        return total
    }, 0)
    return (<b>total of {total} exercises</b>)
}

export default Total;