import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';
import './Todo.css'

const Todo = () => {

    const todos = [
        {id : 1, title: "eat"},
        {id : 2, title: "learn"},
        {id : 3, title: "help"}
    ]
    return (
        <div>
            <TodoCreate />
            <h3>Todo List</h3>
            <TodoList dataTodos = {todos} />
        </div>
    )
}

export default Todo;