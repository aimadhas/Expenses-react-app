function DateExpens(props){
    const year = props.date.getFullYear()
    const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  return (
    <div className='flex flex-col gap-2 px-7 py-2 rounded-md bg-[#252525] items-center'>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default DateExpens;