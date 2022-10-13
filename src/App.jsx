import './App.css'
import { useState } from 'react';
import Base from './components/Base.jsx';
import Header from './components/Header';
import CurrentList from './components/CurrentList.jsx';
import AddToDo from './components/AddToDo.jsx';
import Name from './components/Name.jsx';


export default function App() {

    const [name, setName] = useState('')
    const [todos, setTodos] = useState([])


    function onClick(item) {
        setTodos([...todos, item])
    }
    function handleComplete(item) {
        setTodos(prev => prev.filter(todo => todo !== item))
    }

    function updateName(name) {
        setName(name)
    }

    if (name) {
        return (
            <main>
                <Base
                    header={<Header
                        name={name} />}
                    currentList={<CurrentList
                        todos={todos}
                        handleComplete={handleComplete} />}
                />
                <AddToDo onClick={onClick} />
            </main>
        )
    } else {
        return (
            <main>
                <h3>Hey there!</h3>
                <Name updateName={updateName} />
            </main>
        )
    }
}
