function Chartbars(props){
let barfill = '0%'
if(props.maxValue > 0){
    barfill = Math.round((props.value / props.maxValue) * 100) + '%';
}
return(
    <div className="h-full flex flex-col items-center">
        <div className="h-full w-5 border-spacing-1 border-solid border-[#313131] rounded-xl bg-[#c3b4f3] flex flex-col justify-items-end overflow-hidden">
            <div className="bg-[#4826b9] w-full transition-all ease-out duration-300" style={{height:barfill}}>
            </div>
        </div>
        <div className="font-bold text-lg text-center">{props.label}</div>

    </div>
)
}
export default Chartbars;