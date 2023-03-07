function Filter(props){
    const dropdown = (e) =>{
        props.onfiltered(e.target.value);
    }

    return(
        <div className="flex justify-between mb-5 py-3">
            <p className="text-white text-xl " >Filter By Month</p>
            <select onChange={dropdown}>
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
            </select>
        </div>
    )
}
export default Filter