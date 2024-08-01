import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([newTask.trim(), ...tasks]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
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
          <li key={index} className="task-item">
            {task}
            <button onClick={() => deleteTask(index)} className="delete-btn">
              ×
            </button>
          </li>
        ))}
      </ul>
      <style jsx>{`

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

        .todo-container {
          font-family: Arial, sans-serif;
          max-width: 400px;
          margin: 40px auto;
          padding: 20px;
          background-color: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          position: relative;
          border-radius: 0;
        }
        .todo-container::before,
        .todo-container::after {
          content: '';
          position: absolute;
          background-color: white;
          border: 1px solid #e0e0e0;
          box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          border-radius: 0;
        }
        .todo-container::before {
          bottom: -6px;
          left: 3px;
          right: -3px;
          height: 100%;
          z-index: -1;
        }
        .todo-container::after {
          bottom: -12px;
          left: 6px;
          right: -6px;
          height: 100%;
          z-index: -2;
        }
        .title {
          font-size: 48px;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }
        .input-form {
          margin-bottom: 20px;
          position: relative;
        }
        .task-input {
          width: 100%;
          border: none;
          font-size: 16px;
          padding: 10px 0;
          outline: none;
        }
        .task-input::placeholder {
          color: #999;
        }
        .input-form::after {
          content: '';
          position: absolute;
          left: -20px;
          right: -20px;
          bottom: -10px;
          height: 1px;
          background-color: #eee;
        }
        .task-list {
          list-style-type: none;
          padding: 0;
        }
       .task-item {

  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
        .delete-btn {
          background: none;
          border: none;
          font-size: 20px;
          color: #999;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .task-item:hover .delete-btn {
          opacity: 1;
        }
.task-item::after {
  content: '';
  position: absolute;
  left: -20px;
  right: -20px;
  bottom: 0;
  height: 1px;
  background-color: #eee;
}

      `}</style>
    </div>
  );
};

export default TodoList;