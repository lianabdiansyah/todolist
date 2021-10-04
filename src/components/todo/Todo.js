import TodoList from '../todo-list/TodoList';
import TodoCreate from '../todo-create/TodoCreate';
import './Todo.css'

const Todo = () => {

    const todos = [
        {id : 1, title: "eat"},
        {id : 2, title: "learn"},
        {id : 3, title: "help"}
    ]

    const allTodos = (newOneTodo) => {
        todos.push(newOneTodo)

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