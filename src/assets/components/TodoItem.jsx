const TodoItem = ({ tasks, deleteTask, addTask, changeTaskStatus }) => {

    return (
        <div>
          {tasks.map((task) => 
            <li className="list-none p-3 active:scale-y-90 transition text-sm rounded-lg border border-gray-500/30 mb-2 flex items-center gap-2" key={task.id}>
                <input type="checkbox" className="mr-2" checked={task.completed} onChange={() => {changeTaskStatus(task)}} />
                <span className="flex-1">{task.text}</span>
                <button onClick={() => {deleteTask(task)}} className="text-gray-400 hover:text-red-500 transition-colors">x</button>
            </li>
          )}
        </div>
    )
}

export default TodoItem;