import React, { useState } from 'react';
import { Header } from "./Components/Header/Header"
import { Tasks } from "./Components/Tasks/Tasks"


export function App() {
    const [tasks, setTasks] = useState([]);

    function handleAddTask(taskText) {
      setTasks([...tasks, { text: taskText, completed: false }]);
    }

    function handleToggleTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
      }

    function getCompletedTasksCount() {
        return tasks.filter(task => task.completed).length;
      }

    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

return (
    <>
        <Header onAddTask={handleAddTask}/>
        <Tasks tasks={tasks} getCompletedTasksCount={getCompletedTasksCount} onToggleTask={handleToggleTask} deleteTask={deleteTask} />
    </>
)
}