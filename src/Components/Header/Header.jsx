import './Header.css'
import { useState } from 'react'
import Logo from './../../assets/Logo.svg';
import { HandPalm, PlusCircle } from "phosphor-react";

function Header(props) {
    const [taskText, setTaskText] = useState('');
    function addTask() {
        if(taskText.trim() !== '') {
            props.onAddTask(taskText);
            setTaskText('');
    }
    }

    function handleInputChange(event) {
        setTaskText(event.target.value)
    }

    return (
        <header >
            <img src={Logo}/>
            <div>
                <input
                 placeholder='Adicione uma nova tarefa'
                 value={taskText}
                 onChange={handleInputChange}
                />
                <button onClick={addTask}>Criar <PlusCircle size={16} /></button>
            </div>
        </header>
    )
}

export { Header };