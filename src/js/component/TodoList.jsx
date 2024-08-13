import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const apiURL = "https://playground.4geeks.com/todo";
  const user = "david_scheck"; 
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    getTasks(user);
  }, []);

  const getTasks = async (user) => {
    const response = await fetch(`${apiURL}/users/${user}`);
    if (response.status === 404) {
      createUser();
      return;
    }
    if (response.ok) {
      const data = await response.json();
      setTasks(data.todos);
    }
  };

  const createUser = async () => {
    const response = await fetch(`${apiURL}/users/${user}`, {
      method: "POST",
    });
    console.log(response.status);
  };

  const addTask = async (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      if (editIndex !== null) {
        // Update existing task
        const taskToUpdate = tasks[editIndex];
        const response = await fetch(`${apiURL}/todos/${taskToUpdate.id}`, {
          method: "PUT",
          body: JSON.stringify({ label: newTask.trim(), done: taskToUpdate.done }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const updatedTasks = tasks.map((task, index) =>
            index === editIndex ? { ...task, label: newTask.trim() } : task
          );
          setTasks(updatedTasks);
          setEditIndex(null);
        }
      } else {
        // Add new task
        const response = await fetch(`${apiURL}/todos/${user}`, {
          method: "POST",
          body: JSON.stringify({ label: newTask.trim(), done: false }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTasks([data, ...tasks]);
        }
      }
      setNewTask('');
    }
  };

  const deleteTask = async (id) => {
    const response = await fetch(`${apiURL}/todos/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const editTask = (index) => {
    setNewTask(tasks[index].label);
    setEditIndex(index);
  };


  return (
    <div className="todo-container">
      <h1 className="title">todos</h1>
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
            key={task.id}
            task={task.label}
            onEdit={() => editTask(index)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>
   
    </div>
  );
};

export default TodoList;