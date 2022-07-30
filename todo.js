function Todo({ todo, index, remove }) {

    function handle() {
        remove(index)
    }

    return <div className="todo">
        <div style={{
            flexBasis: '90%',
            alignItems: 'center',
            display: 'flex',
        }}>{todo.text}</div>
        <div style={{
            flexBasis: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}><img src="./images/close.svg" id="closeImage" onClick={handle} /></div>
    </div>
}