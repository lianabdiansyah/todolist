import './TodoCreate.css';

function TodoCreate(props) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const newOneTodo = {
            id: Math.floor(Math.random() * 100 + 1),
            title: 'read book'
        }

        props.onCreateTodo(newOneTodo)

        console.log(newOneTodo)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="todo-form">
                <input type="text" />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoCreate
