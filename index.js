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

    const addTodo = text => {
        const newTodos = [...todos, { text: text, isCompleted: false }]
        setTodos(newTodos)
    }
    
    const removeTodo = index => {
        let existedTodos = [...todos]
        existedTodos.splice(index, 1)
        setTodos(existedTodos)
    }
    return (
    <div className="app">
        <div className="todo-list">
        {todos.map((todo, index) => <Todo index={index} key={index} todo={todo} remove={removeTodo}/>)}
        <TodoForm addTodo={addTodo}/>
        </div>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)


//  const root = ReactDOM.createRoot(document.getElementById("root"));
//  root.render(element)