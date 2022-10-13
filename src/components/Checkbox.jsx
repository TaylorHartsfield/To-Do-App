export default function Checkbox({handleComplete, todo}){
    
    function handleCompleteWrapper(e){
        handleComplete(e.target.value)
    }
    return (
        <input 
        type="checkbox" 
        value={todo} 
        onClick={handleCompleteWrapper}
        />
    )
}