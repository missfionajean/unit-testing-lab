import { useState } from "react";
import "./App.css";

function App() {
	// state variable for list itself
	const [todos, setTodos] = useState([]);

	const [newTodo, setNewTodo] = useState("");

    const handleInput = (event) => {
        setNewTodo(event.target.value)
    }

    const handleSubmit = () => {
        setTodos([...todos, {task: newTodo, complete: false}])
        setNewTodo("")
    }

    const toggleComplete = (index) => {
        if (todos[index].complete) {
            setTodos([...todos], todos[index].complete = false)
        } else {
            setTodos([...todos], todos[index].complete = true)
        }
    }

	return (
		<>
            <h1>Fiona's To-Do App</h1>

            <h2>Add Task</h2>
			<label for="newTodo"></label>
            <input type="text" name="newTodo" onChange={handleInput} value={newTodo}/>
            <button onClick={handleSubmit}>Submit</button>

            <h2>Current Tasks</h2>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i} style={todo.complete ?{textDecoration: "line-through"} : {textDecoration: "none"}} onClick={()=> {toggleComplete(i)}}>
                        {todo.task}
                    </li>
                ))}
            </ul>
		</>
	);
}

export default App;
