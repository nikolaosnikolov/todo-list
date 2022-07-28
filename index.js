function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false
        },
        {
            text: 'meet friends for lunch',
            isCompleted: false
        },
        {
            text: 'build todo app',
            isCompleted: false
        },
    ]);
    const [value, setValue] = React.useState('');
    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return;
        const newTodos = [...todos, { text: value, isCompleted: false }]
        setTodos(newTodos)
        setValue('')
    }
    const removeTodo = event => {
        const index = Number(event.target.id)
        let existedTodos = [...todos]
        existedTodos.splice(index, 1)
        setTodos(existedTodos)
    }
    return (<>
        {todos.map((todoItem, index) => <div className="todo" key={index} id={index} onClick={removeTodo}>{todoItem.text}</div>)}
        <form onSubmit={handleSubmit}>
            <input type="text" className="input" value={value} placeholder="Add Todo ..." onChange={event => setValue(event.target.value)} />
        </form>
    </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(element)