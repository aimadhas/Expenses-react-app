import react ,{useState} from 'react'
function AddnewExpense(props){
    const [title,settitle] = useState('')
    const [amount,setamount] = useState('')
    const [date,setdate] = useState('')
    const result = function(e){
        settitle(e.target.value)
    }
    const result2 = function(e){
        setamount(e.target.value)
    }
    const result3 = function(e){
        setdate(e.target.value)
    }
    const submited =  (e) => {
        // e.prevantDefault()
        e.preventDefault()
        const expense = {
            id:Math.random().toString(36).substring(2),
            title : title,
            amount : amount,
            date : new Date(date)
        }
        props.onsavedata(expense)
        settitle('')
        setamount('')
        setdate('')
    }
    return(
        <form  className='w-3/4 my-6 mx-auto bg-[#9d86eb] p-10 rounded-lg shadow-lg' onSubmit={submited}>
            <div className="flex flex-wrap justify-between items-center">
                <div className='flex flex-col gap-2 mb-2'>
                    <label>Title</label>
                    <input className='w-96 p-2 rounded-lg outline-none' type="text" value={title} onChange={result} />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label>Amount</label>
                    <input className='w-96 p-2 rounded-lg outline-none' type="number" min='0' onChange={result2} value={amount} />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label>Date</label>
                    <input className='w-96 p-2 rounded-lg outline-none' type="date" min='2020-01-01' max='2023-12-31' value={date} onChange={result3} />
                </div>
            </div>
            <input className="bg-[#360052] py-3 px-6 text-white mt-4 rounded-lg cursor-pointer" type="submit" />
        </form>
    )
}
export default AddnewExpense;