const Button = ({setValue, value, text}) =>{
    const handleClick = () =>{
        setValue(value+1)
    }
    return <button onClick={handleClick}>{text}</button>
}

export default Button