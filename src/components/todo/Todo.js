import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';
import './Todo.css'
import { useState } from "react";

const Todo = () => {
    const [todos, setTodos] = useState([
      { id: 1, title: "eat" },
      { id: 2, title: "learn" },
      { id: 3, title: "help" },
    ]);

    const allTodos = (newOneTodo) => {
        setTodos(todos.concat(newOneTodo))

        console.log(todos)
    }
    return (
        <div>
            <TodoCreate onCreateTodo={allTodos} />
            <h3>Todo List</h3>
            <TodoList dataTodos = {todos} />
        </div>
    )
}

export default Todo;