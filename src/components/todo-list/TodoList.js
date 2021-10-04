import './TodoList.css';

function TodoList(props) {
console.log(props.dataTodos)
    return (
        <div>
            <ul>
                {
                    props.dataTodos.map(todo => {
                        return (
                            <li key={todo.id}>{todo.title}</li>
                       )
                    })
                }
                
            </ul>
        </div>
    )
}

export default TodoList
