import Checkbox from './Checkbox.jsx'

export default function CurrentList({ list, handleComplete}) {
   
    return (
        <div>
            <ul>
                {list.map(item => { return (<li><Checkbox todo={item} handleComplete={handleComplete} />{item}</li>)})}
            </ul>
        </div>
    )
}