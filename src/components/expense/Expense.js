import react ,{useState} from 'react'
import Card from './Card'
import Filter from './Filter'
import Expenseitem from './Expenseitem';
import Expensechar  from '../chart/Expensechar'
function Expense(props){
    const [filteryears, setFilteredyears] = useState('2020');
    const filtered = (year) =>{
     setFilteredyears(year)
    }
    const filterexpense = props.item.filter((e) =>{
        return e.date.getFullYear().toString() === filteryears;
    })

    return(
    <Card>
    <Filter onfiltered={filtered}></Filter>
    <Expensechar expense={filterexpense} ></Expensechar>
    {filterexpense.length === 0 && <p className='text-white'>No expenses found.</p>}
        {filterexpense.length >0 &&
        filterexpense.map((e) => (
            <Expenseitem key ={e.id} title ={e.title} amount = {e.amount} date1 = {e.date}></Expenseitem>
          ))}
    </Card>
    )
}
export default Expense