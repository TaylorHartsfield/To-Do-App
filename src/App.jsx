import './App.css'
import {useState} from 'react';
import Base from './components/Base.jsx';
import Header from './components/Header';
import CurrentList from './components/CurrentList.jsx'

export default function App() {

    const [name, setName] = useState('User')
    const [todos, setTodos] = useState(['Learn Vanilla JS', 'Cuddle Bodhi', 'Solve Binary Tree Alorithms'])
    
    return (
        <main>
            <Base
            header={<Header name={name} />}
            currentList = {<CurrentList list={todos} />}
            />
        </main>
    )
}