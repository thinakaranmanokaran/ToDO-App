import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { PiCheckBold } from "react-icons/pi";

function Home() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const fetchTodos = async () => {
        const res = await axios.get("http://localhost:5000/todos");
        setTodos(res.data);
    };

    const addTodo = async () => {
        if (!newTodo) return;
        await axios.post("http://localhost:5000/todos", { title: newTodo });
        setNewTodo("");
        fetchTodos();
    };

    const toggleTodo = async (id, completed) => {
        await axios.put(`http://localhost:5000/todos/${id}`, { completed: !completed });
        fetchTodos();
    };

    const deleteTodo = async (id) => {
        await axios.delete(`http://localhost:5000/todos/${id}`);
        fetchTodos();
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="bg-dark min-h-screen w-screen text-light ">

            <div className="p-6 max-w-2/4 mx-auto">
                <h1 className="text-5xl  font-primary my-6  mb-10">TO-DO List</h1>
                <div className="flex gap-2 mb-4 font-secondary ">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className="border focus:outline-none py-8 p-6 h-12 w-full flex-1 text-xl"
                    />
                    <button onClick={addTodo} className="bg-primary  text-white w-32 cursor-pointer  ">
                        Add
                    </button>
                </div>
                <ul className="mt-8">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex justify-between items-center mb-2 bg-secondary text-dark  font-secondary px-10 pl-6 min-h-20 text-xl mt-4 relative group cursor-pointer transition-all duration-300">
                            <div className="flex items-center gap-4 transition-all duration-300">
                                <div className={`w-8 h-8 text-2xl border  ${todo.completed ? "bg-dark text-white  border-none flex justify-center items-center " : "group-hover:rounded-full transition-all duration-300"} `}>{todo.completed ? (<PiCheckBold />) : null}</div>
                                <span
                                    className={`flex-1 cursor-pointer ${todo.completed ? "line-through text-dark" : ""}`}
                                    onClick={() => toggleTodo(todo.id, todo.completed)}
                                >
                                    {todo.title}
                                </span>
                            </div>
                            <button onClick={() => deleteTodo(todo.id)} className="bg-dark text-light px-6 py-4 cursor-pointer absolute right-1 top-1 h-18 w-18 text-xl flex items-center justify-center hover:text-2xl transition-all duration-300">
                                <AiOutlineDelete />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
