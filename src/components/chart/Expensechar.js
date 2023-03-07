import Chart from './Chart';
function Expensechar(props){
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
      ];
      for (const e of props.expense) {
        const expenseMonth = e.date.getMonth(); // starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += e.amount;
      }
      return(
        <Chart data={chartDataPoints} ></Chart>
      )
    
}
export default Expensechar