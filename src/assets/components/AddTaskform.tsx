import { useState, type FormEvent } from "react";
import Input from "./Input";
import Button from "./Button";

interface AddTaskFormProps {
    addTask: (text: string) => void;
}

const AddTaskForm = ({ addTask }: AddTaskFormProps) => {

    const [taskText, setTaskText] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskText.trim() === "") return;
        addTask(taskText);
        setTaskText("");
    };

    return (
        <form className="todo_form flex items-center gap-5 bg-white h-11-5 overflow-hidden max-w-md w-full" onSubmit={handleSubmit}>
            <Input
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="New task title"
            />
            <Button text="Add" type="submit" />
        </form>
    )
}

export default AddTaskForm;
