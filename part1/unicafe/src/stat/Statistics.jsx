import StatisticLine from "./StatisticLine"

const Statistics = ({good, bad, neutral}) =>{
    function total(){
        return good + bad + neutral
    }
    function average(){
        if(total() !== 0)
            return (good-bad)/total()
        else
            return 0
    }
    function positivePercent(){
        if(total() !== 0)
            return good/total() * 100
        else
            return 0
    }

    if(total() !== 0)
    return (
        <>
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text={"good"} value={good}/>
                    <StatisticLine text={"neutral"} value={neutral}/>
                    <StatisticLine text={"bad"} value={bad}/>
                    <StatisticLine text={"all"} value={total()}/>
                    <StatisticLine text={"average"} value={average()}/>
                    <StatisticLine text={"positive"} percent={true} value={positivePercent()}/>
                </tbody>
            </table>
        </>
    )
    else
        return (
        <>
            <h1>statistics</h1>
            <div>No feedback given</div>
        </>
    )
}

export default Statistics