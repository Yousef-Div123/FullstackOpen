const StatisticLine = ({value, text, percent}) =>{
    return (<tr>
    <td>{text}</td> 
    <td> {value} {percent?"%":""}</td>
    </tr>)
}

export default StatisticLine