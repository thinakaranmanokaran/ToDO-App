import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { PiCheckBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion"; // ✨ Animation

function Home() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const fetchTodos = async () => {
        const res = await axios.get("http://localhost:5000/todos");
        setTodos(res.data);
    };

    const addTodo = async () => {
        if (!newTodo.trim()) return;
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
        <div className="bg-dark min-h-screen w-screen text-light">
            <div className="p-6 max-w-2/4 mx-auto">
                <h1 className="text-5xl font-primary my-6 mb-10">TO-DO List</h1>

                {/* Input + Add button */}
                <div className="flex gap-2 mb-4 font-secondary">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        className="border focus:outline-none py-8 p-6 h-12 w-full flex-1 text-xl transition-all duration-300 focus:shadow-lg"
                        placeholder="Add a new task..."
                    />
                    <button
                        onClick={addTodo}
                        className="bg-primary text-white w-32 cursor-pointer transition-all duration-300 hover:bg-opacity-80 hover:scale-105 active:scale-95"
                    >
                        Add
                    </button>
                </div>

                {/* Todo List */}
                <ul className="mt-8 space-y-4">
                    <AnimatePresence>
                        {todos.map((todo) => (
                            <motion.li
                                key={todo.id}
                                initial={{ opacity: 0, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-between items-center bg-secondary text-dark font-secondary px-10 pl-6 min-h-20 text-xl relative group cursor-pointer  shadow transition-all duration-300 hover:shadow-lg"
                            >
                                <div
                                    className="flex items-center gap-4 transition-all duration-300"
                                    onClick={() => toggleTodo(todo.id, todo.completed)}
                                >
                                    <motion.div
                                        className={`w-8 h-8 text-2xl border flex justify-center items-center  transition-colors duration-300 ${todo.completed
                                                ? "bg-dark text-white border-none rounded-full"
                                                : "border-dark group-hover:bg-dark transition-all duration-300 group-hover:rounded-full group-hover:text-white"
                                            }`}
                                        animate={{ scale: todo.completed ? 1.2 : 1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {todo.completed === 1 && <PiCheckBold />}
                                    </motion.div>

                                    <span
                                        className={`flex-1 transition-all duration-300 ${todo.completed
                                                ? "line-through text-gray-600"
                                                : "text-dark"
                                            }`}
                                    >
                                        {todo.title}
                                    </span>
                                </div>

                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="bg-dark text-light p-3 h-16 w-16 cursor-pointer absolute right-2 top-1/2 -translate-y-1/2  text-xl flex items-center justify-center  hover:text-2xl hover:text-red-600 transition-all duration-300"
                                >
                                    <AiOutlineDelete />
                                </button>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
        </div>
    );
}

export default Home;
