function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return;
        addTodo(value)
        setValue('')
    }

    return (
        <form style={{marginBottom: '1rem'}} onSubmit={handleSubmit}>
            <input type="text" id="input" className="input" value={value} placeholder="Add Todo ..." onChange={event => setValue(event.target.value)} />
        </form>
    );
}