import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? newTask.trim() : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([newTask.trim(), ...tasks]);
      }
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-container">
      <form onSubmit={addTask} className="input-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="What needs to be done?"
          className="task-input"
        />
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onEdit={() => editTask(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;