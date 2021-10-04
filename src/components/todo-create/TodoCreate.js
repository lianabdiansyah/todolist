import { useState } from 'react';
import './TodoCreate.css';

function TodoCreate(props) {

    const [newInputTodo, setNewInputTodo] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        const newOneTodo = {
            id: Math.floor(Math.random() * 100 + 1),
            title: newInputTodo
        }

        props.onCreateTodo(newOneTodo)
        setNewInputTodo('') //akan membuat form kosong
        // console.log(newOneTodo)
    }

    const handleInputTodo = (event) => {
        setNewInputTodo(event.target.value)

        console.log(newInputTodo)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" value={newInputTodo} onChange={handleInputTodo}  />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoCreate
