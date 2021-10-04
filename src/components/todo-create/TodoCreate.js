import './TodoCreate.css';

function TodoCreate() {

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTodo = {
            id: Math.floor(Math.random() * 100 + 1),
            title: 'read book'
        }

        console.log(newTodo)
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
