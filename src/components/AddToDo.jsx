import {useState} from 'react';

export default function AddToDo({onClick}){

    const [newItem, setNewItem] = useState('')
    
    function handleOnChange(e) {
        setNewItem(e.target.value)
    }

    function onClickWrapper() {
        onClick(newItem)
    }
    return (
        <div>
            <input 
            type="text" 
            value={newItem} 
            onChange={handleOnChange} 
            placeholder = "Add a todo..."
            />
            <button type="submit" onClick={onClickWrapper}>
            Add it!
            </button>
        </div>
    )
}