import DateExpens from './DateExpens'
import react ,{useState} from 'react'
function Expenseitem(props){
   return(
    <div className='bg-[#414141] flex justify-between items-center text-white p-7 w-full shadow-sm rounded-lg mb-3'>
    <div className="flex items-center gap-8">
    <div>
    <DateExpens date = {props.date1} ></DateExpens>
    </div>
        <h2 className="text-xl  font-semibold">{props.title}</h2>
    </div>
        <div className="bg-[#360052] px-10 py-4 rounded-sm">
            $ {props.amount}
        </div>
   </div>
   )
   
}
export default Expenseitem;