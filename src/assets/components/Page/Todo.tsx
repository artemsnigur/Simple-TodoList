import { useState } from "react";
import Search from "../Search";
import AddTaskForm from "../AddTaskform";
import TodoInfo from "../TodoInfo";
import TodoItem from "../TodoItem";
import type { Task } from "../../../types";

const Todo = () => {

    const [tasks, setTasks] = useState<Task[]>([
        {
            id: Date.now(),
            text: "Learn React",
            completed: false
        },
        {
            id: Date.now() + 1,
            text: "Build a React app",
            completed: false
        },
        {
            id: Date.now() + 2,
            text: "Deploy the app",
            completed: false
        }
    ]);

    const [search, setSearch] = useState("");

    const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(search.toLowerCase()));

    const clearAllTasks = () => {
        setTasks([]);
    }

    const deleteTask = (task: Task) => {
        setTasks(tasks.filter(t => t.id !== task.id));
    }

    const addTask = (text: string) => {
        const newTask: Task = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
    };

    const changeTaskStatus = (task: Task) => {
        const updatedTasks = tasks.map(t => {
            if (t.id === task.id) {
                return { ...t, completed: !t.completed };
            }
            return t;
        });
        setTasks(updatedTasks);
    }

    return (
        <div className="justify-center items-center h-screen flex">
            <div className="flex flex-col w-50% gap-5 border p-2.5 pr-7 pl-7 pt-5 border-gray-500/30 rounded-md overflow-hidden max-w-md h-150 w-120">
                <h1 className="flex justify-center text-4xl font-bold mb-4">To do list</h1>
                <AddTaskForm addTask={addTask} />
                <Search search={search} setSearch={setSearch} />
                <TodoInfo tasks={filteredTasks} clearAllTasks={clearAllTasks} />
                <TodoItem tasks={filteredTasks} deleteTask={deleteTask} changeTaskStatus={changeTaskStatus} />
            </div>
        </div>
    )
}

export default Todo;
