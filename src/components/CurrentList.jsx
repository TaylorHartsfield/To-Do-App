import Checkbox from './Checkbox.jsx'

export default function CurrentList({ todos, handleComplete }) {

    if (todos.length !== 0) {
        return (
            <div>
                <ul>
                    {todos.map(item => { return (<li><Checkbox todo={item} handleComplete={handleComplete} />{item}</li>) })}
                </ul>
            </div>
        )
    } else {
        return (
            <div>
                <p>Add your first to-do below!</p>
            </div>
        )
    }
}