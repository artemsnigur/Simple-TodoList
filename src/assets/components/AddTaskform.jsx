import Input from "./Input.jsx";
import Button from "./Button.jsx";
import { useState } from "react";

const AddTaskForm =  ({ addTask, tasks }) => {

  const [taskText, setTaskText] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === "") return;
    addTask(taskText);
    setTaskText("");
  };

  return (
    <form className="todo_form flex items-center gap-5 bg-white h-11-5 overflow-hidden max-w-md w-full" onSubmit={handleSubmit}>
      <Input 
        className="todo_input"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="New task title"
      />
      <Button text="Add" type="submit" /> 
    </form>
  )
}

export default AddTaskForm;