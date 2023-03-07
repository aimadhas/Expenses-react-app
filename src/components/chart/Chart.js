import react from 'react';
import Chartbars from './Chartbars';
function Chart(props){
    const expensevalues= props.data.map((e)=>  e.value )
    const totalMaximum = Math.max(...expensevalues)
    return <div className="p-4 rounded-md bg-[#f8dfff] text-center flex justify-between h-40 mb-4">
        {props.data.map((d)=>(
            <Chartbars
                      key={d.label}
                      value={d.value}
                      maxValue={totalMaximum}
             label={d.label}></Chartbars>

        ))}
    </div>
}
export default Chart;