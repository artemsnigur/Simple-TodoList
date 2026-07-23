import Button from "./Button";
import type { Task } from "../../types";

interface TodoInfoProps {
    tasks: Task[];
    clearAllTasks: () => void;
}

const TodoInfo = ({ tasks, clearAllTasks }: TodoInfoProps) => {

    return (
        <div className="flex flex-row justify-between items-center">
            <h2 className="flex justify-left text-xl font-bold">Total tasks: {tasks.length}</h2>
            <Button text="Clear all" type="button" onClick={clearAllTasks} />
        </div>
    )
}

export default TodoInfo;
